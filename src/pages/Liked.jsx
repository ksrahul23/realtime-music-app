import React from 'react'
import Player from '../components/Player'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

function Liked() {
  let songs = useSelector(state=>state.liked)
  return (
    <div className='w-full h-[100vh] bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px]'>
      <Player/>


      {!songs.length<1?<><h1 className='text-white font-semibold text-[20px]'>Liked Songs</h1>
      <div className='w-full h-[65%] md:h-full flex flex-col justify-start items-center gap-5 overflow-auto'>
        {songs.map((song)=>(
          <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.songIndex}/>
        ))}
      </div></>
      :
      <div className='text-gray-700 text-[30px] text-semibold'>No Liked Songs</div>
      }

    </div>
  )
}

export default Liked
