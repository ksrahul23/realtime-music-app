import React, { useContext } from 'react'
import { songsData } from '../songs'
import { datacontext } from '../context/UserContext'
import { IoPlay } from "react-icons/io5";
import { MdOutlinePause, MdReplay } from "react-icons/md";
import { CgPlayTrackPrev, CgPlayTrackNext } from "react-icons/cg";

function Player() {
    let {playingSong,playSong,pauseSong,index,nextSong,prevSong,restartSong,hasPlayed} = useContext(datacontext)
  return (
    <div className='w-full h-[92px] bg-gray-900 fixed bottom-0 left-0 right-0 rounded-t-[20px] shadow-lg flex items-center px-4 gap-4 z-40'>
      <div className='flex items-center gap-4 z-10'>
        <img src={songsData[index].image} alt="" className='w-[60px] h-[60px] object-cover rounded-lg'/>
        <div className='text-[16px] md:text-[18px] max-w-[260px] truncate'>
          <div className='text-white font-semibold truncate'>{songsData[index].name}</div>
          <div className='text-gray-400 text-xs truncate'>{songsData[index].singer}</div>
        </div>
      </div>

      {/* Centered fixed controls */}
      <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20'>
        <CgPlayTrackPrev
          onClick={()=> hasPlayed && prevSong()}
          className={`${hasPlayed? 'opacity-70 hover:opacity-100':'opacity-50'} w-6 h-6 cursor-pointer transition-opacity`} />

        {!playingSong ? (
          <div className='w-[56px] h-[56px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-700 transition-all cursor-pointer' onClick={()=>playSong()}><IoPlay className='w-[22px] h-[22px]'/></div>
        ) : (
          <div className='w-[56px] h-[56px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-700 transition-all cursor-pointer' onClick={()=>pauseSong()}><MdOutlinePause className='w-[22px] h-[22px]'/></div>
        )}

        <CgPlayTrackNext onClick={()=>nextSong()} className='opacity-70 hover:opacity-100 w-6 h-6 cursor-pointer transition-opacity'/>
        <MdReplay onClick={()=>restartSong()} className='opacity-70 hover:opacity-100 w-6 h-6 cursor-pointer transition-opacity'/>
      </div>

      <div className='flex-1' />
    </div>
  )
}

export default Player
