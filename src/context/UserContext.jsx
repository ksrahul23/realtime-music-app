import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData as initialSongsData } from '../songs'

export const datacontext = createContext()
function UserContext({ children }) {
    let audioRef = useRef(new Audio())
    let [songs, setSongs] = useState(initialSongsData)
    let [index, setIndex] = useState(0)
    let [playingSong, setPlayingSong] = useState(false)
    let [hasPlayed, setHasPlayed] = useState(false)

    useEffect(() => {
        if (songs[index]) {
            audioRef.current.src = songs[index].song
            audioRef.current.load()
            if (playingSong) {
                playSong()
            }
        }
    }, [index, songs])

    function playSong() {
        setPlayingSong(true)
        setHasPlayed(true)
        audioRef.current.play()
    }

    function pauseSong() {
        setPlayingSong(false)
        audioRef.current.pause()
    }

    function nextSong() {
        setIndex((prev) => (prev + 1) % songs.length)
    }

    function prevSong() {
        setIndex((prev) => {
            if (prev === 0) {
                return songs.length - 1
            }
            else {
                return prev - 1
            }
        })
    }

    function restartSong() {
        try {
            audioRef.current.currentTime = 0
            audioRef.current.play()
            setPlayingSong(true)
            setHasPlayed(true)
        } catch (e) { }
    }

    function addLocalSong(file) {
        const objUrl = URL.createObjectURL(file);
        const newSong = {
            id: Date.now(),
            name: file.name.replace(/\.[^/.]+$/, ""),
            song: objUrl,
            image: '/logo.webp',
            category: 'Local',
            liked: false,
            singer: 'Local Upload'
        };
        setSongs(prev => [...prev, newSong]);
        setIndex(songs.length === undefined ? 0 : songs.length);
    }

    let value = {
        audioRef, playSong, pauseSong, playingSong, setPlayingSong, nextSong, prevSong, restartSong, index, setIndex, hasPlayed, songs, addLocalSong
    }
    return (
        <div>
            <datacontext.Provider value={value}>
                {children}
            </datacontext.Provider>
        </div>
    )
}

export default UserContext
