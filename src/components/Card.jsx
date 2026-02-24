import React, { useContext } from 'react'
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { datacontext } from '../context/UserContext';
import { useDispatch, useSelector } from 'react-redux';
import { AddSong, RemoveSong } from '../redux/PlaylistSlice';
import { MdPlaylistRemove } from "react-icons/md";
import { AddLiked, RemoveLiked } from '../redux/LikedSlice';
import { GoHeartFill } from "react-icons/go";

function Card({ name, image, singer, songIndex }) {
  let { playSong, index, setIndex } = useContext(datacontext)
  let dispatch = useDispatch()
  let gaana = useSelector(state => state.playlist)
  const songExistInPlaylist = gaana.some(song => song.songIndex === songIndex)

  let likedSong = useSelector(state => state.liked)
  const songExistInLiked = likedSong.some(song => song.songIndex === songIndex)

  return (
    <div className='w-full bg-black/60 border border-gray-800 rounded-xl p-4 flex flex-col justify-between hover:bg-gray-800/80 hover:border-neon-yellow/50 transition-all group backdrop-blur-sm shadow-md'>

      <div
        className='flex flex-col items-center gap-4 cursor-pointer relative w-full mb-4'
        onClick={() => {
          setIndex(songIndex)
          playSong()
        }}
      >
        <div className='w-full aspect-square relative rounded-lg overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(223,255,0,0.2)] transition-shadow'>
          <img src={image} alt={`${name} cover`} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />

          {/* Play overlay on hover */}
          <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
            <div className='w-[50px] h-[50px] rounded-full bg-neon-yellow text-black flex justify-center items-center shadow-[0_0_15px_rgba(223,255,0,0.6)]'>
              <span className='ml-1 text-2xl'>▶</span>
            </div>
          </div>
        </div>

        <div className='w-full text-left'>
          <div className='text-white text-[18px] font-bold truncate group-hover:text-neon-yellow transition-colors'>{name}</div>
          <div className='text-gray-400 text-[14px] font-medium truncate'>{singer}</div>
        </div>
      </div>

      <div className='flex justify-between items-center w-full pt-3 border-t border-gray-800/50 mt-auto'>
        <div className='flex gap-4'>
          {!songExistInLiked ? (
            <GoHeart onClick={() => dispatch(AddLiked({ name, image, singer, songIndex }))} className='text-gray-400 hover:text-red-500 hover:scale-125 text-[22px] cursor-pointer transition-all' />
          ) : (
            <GoHeartFill onClick={() => dispatch(RemoveLiked(songIndex))} className='text-red-500 hover:scale-125 text-[22px] cursor-pointer transition-all drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]' />
          )}
        </div>

        <div className='flex gap-4'>
          {!songExistInPlaylist ? (
            <MdOutlinePlaylistAdd onClick={() => dispatch(AddSong({ name, image, singer, songIndex }))} className='text-gray-400 hover:text-neon-yellow hover:scale-125 text-[26px] cursor-pointer transition-all' />
          ) : (
            <MdPlaylistRemove onClick={() => dispatch(RemoveSong(songIndex))} className='text-neon-yellow hover:scale-125 text-[26px] cursor-pointer transition-all drop-shadow-[0_0_8px_rgba(223,255,0,0.6)]' />
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
