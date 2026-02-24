import React, { useContext } from 'react'
import { datacontext } from '../context/UserContext';
import Card from '../components/Card';
import Player from '../components/Player';
import { ActivePageContext } from '../context/ActivePageContext'
import { FaRegUserCircle } from "react-icons/fa";

function Home() {
    let { songs } = useContext(datacontext)
    const { active } = useContext(ActivePageContext)

    return (
        <div className={`w-full min-h-screen bg-transparent flex flex-col relative overflow-x-hidden transition-opacity duration-300 ${active === '/' ? 'opacity-100' : 'opacity-0'} pb-[120px]`}>
            <Player />

            <div className='w-full px-4 md:px-10 pt-4 md:pt-8 flex flex-col gap-10'>

                {/* Section 1: Quick Picks */}
                {songs.length > 0 && (
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <FaRegUserCircle className='w-12 h-12 text-gray-400' />
                            <div className='flex flex-col'>
                                <span className='text-gray-400 text-xs font-semibold tracking-wider'>START RADIO FROM A SONG</span>
                                <h2 className='text-white text-3xl font-bold tracking-tight'>Quick picks</h2>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            {songs.slice(0, 4).map((song, idx) => (
                                <Card name={song.name} image={song.image} singer={song.singer} songIndex={idx} key={song.id} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Section 2: Recommended */}
                {songs.length > 4 && (
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-3xl font-bold tracking-tight'>Recommended music</h2>
                        <div className='flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x'>
                            {songs.slice(4).map((song, idx) => (
                                <div key={song.id} className='flex-none w-[180px] md:w-[240px] snap-start'>
                                    <Card name={song.name} image={song.image} singer={song.singer} songIndex={idx + 4} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Section 3: More of what you like */}
                {songs.length > 2 && (
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-white text-3xl font-bold tracking-tight'>More of what you like</h2>
                        <div className='flex gap-5 overflow-x-auto no-scrollbar pb-6 snap-x'>
                            {/* Reversing current songs to create dummy sections since we have limited song data */}
                            {[...songs].reverse().slice(0, 6).map((song, idx) => {
                                const originalIdx = songs.findIndex(s => s.id === song.id);
                                return (
                                    <div key={'more-' + song.id} className='flex-none w-[180px] md:w-[240px] snap-start'>
                                        <Card name={song.name} image={song.image} singer={song.singer} songIndex={originalIdx} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Home
