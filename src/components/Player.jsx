import React, { useContext, useEffect, useState } from 'react'
import { datacontext } from '../context/UserContext'
import { IoPlay, IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { MdOutlinePause, MdReplay } from "react-icons/md";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";

function Player() {
  let { audioRef, playingSong, playSong, pauseSong, index, nextSong, prevSong, restartSong, hasPlayed, songs } = useContext(datacontext)

  let [progress, setProgress] = useState(0)
  let [volume, setVolume] = useState(1)

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current.duration) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
      }
    }
    const audio = audioRef.current
    audio.addEventListener("timeupdate", updateProgress)
    return () => audio.removeEventListener("timeupdate", updateProgress)
  }, [audioRef])

  const handleProgress = (e) => {
    const val = e.target.value
    setProgress(val)
    audioRef.current.currentTime = (audioRef.current.duration * val) / 100
  }

  const handleVolume = (e) => {
    let val = Number(e.target.value)
    setVolume(val)
    audioRef.current.volume = val
  }

  if (!songs || !songs[index]) return null;

  return (
    <div className='w-full h-[90px] bg-[#0a0a0a]/95 backdrop-blur-md border-t border-gray-800 fixed bottom-[80px] md:bottom-0 left-0 right-0 flex flex-col z-40 transition-all shadow-[0_-5px_20px_rgba(0,0,0,0.5)]'>
      {/* Progress Bar */}
      <div className='w-full h-[5px] group flex items-center bg-gray-800 cursor-pointer relative'>
        <input type="range" min="0" max="100" value={progress || 0} onChange={handleProgress} className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10' />
        <div className='h-full bg-neon-yellow relative' style={{ width: `${progress}%` }}>
          <div className='absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_5px_rgba(223,255,0,1)]'></div>
        </div>
      </div>

      <div className='flex flex-1 items-center justify-between px-4'>
        {/* left flex */}
        <div className='flex items-center gap-4 w-[30%] min-w-[150px]'>
          <img src={songs[index].image} alt="" className='w-[55px] h-[55px] object-cover rounded-md shadow-[0_0_10px_rgba(255,255,255,0.05)]' />
          <div className='truncate hidden sm:block'>
            <div className='text-white font-semibold truncate hover:underline cursor-pointer text-[15px]'>{songs[index].name}</div>
            <div className='text-gray-400 text-[11px] truncate'>{songs[index].singer}</div>
          </div>
        </div>

        {/* Center fixed controls */}
        <div className='flex items-center gap-4 sm:gap-6 justify-center flex-1'>
          <CgPlayTrackPrev onClick={() => hasPlayed && prevSong()} className={`${hasPlayed ? 'text-gray-300 hover:text-white' : 'text-gray-600'} w-7 h-7 cursor-pointer transition-colors`} />

          {!playingSong ? (
            <div className='w-[45px] h-[45px] rounded-full bg-white text-black flex justify-center items-center hover:scale-105 transition-all cursor-pointer shadow-[0_0_15px_rgba(223,255,0,0.2)] hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]' onClick={() => playSong()}><IoPlay className='w-[22px] h-[22px] ml-1' /></div>
          ) : (
            <div className='w-[45px] h-[45px] rounded-full bg-white text-black flex justify-center items-center hover:scale-105 transition-all cursor-pointer shadow-[0_0_15px_rgba(223,255,0,0.2)] hover:shadow-[0_0_20px_rgba(223,255,0,0.5)]' onClick={() => pauseSong()}><MdOutlinePause className='w-[22px] h-[22px]' /></div>
          )}

          <CgPlayTrackNext onClick={() => nextSong()} className='text-gray-300 hover:text-white w-7 h-7 cursor-pointer transition-colors' />
          <MdReplay onClick={() => restartSong()} className='text-gray-400 hover:text-white w-5 h-5 cursor-pointer transition-colors hidden sm:block' />
        </div>

        {/* Right Volume Controls */}
        <div className='w-[30%] min-w-[150px] hidden md:flex justify-end items-center gap-3 pr-2'>
          {volume === 0 ? <IoVolumeMute className='text-gray-400 w-5 h-5' /> : <IoVolumeHigh className='text-gray-400 w-5 h-5' />}
          <div className='w-[90px] h-[4px] bg-gray-800 rounded-full relative group flex items-center'>
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume} className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10' />
            <div className='h-full bg-neon-yellow rounded-full' style={{ width: `${volume * 100}%` }}></div>
            <div className='w-3 h-3 bg-white rounded-full absolute opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 shadow-md transition-all' style={{ left: `calc(${volume * 100}% - 6px)` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
