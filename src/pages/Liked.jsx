import React from 'react'
import Player from '../components/Player'
import { useSelector } from 'react-redux'
import Card from '../components/Card'

function Liked() {
  let songs = useSelector(state => state.liked)
  return (
    <div className='w-full h-[100vh] bg-black flex justify-start items-center flex-col pt-[20px] md:pt-[100px] gap-[30px]'>
      <Player />


      {!songs.length < 1 ? <><h1 className='text-neon-yellow font-semibold text-[24px] border-b border-gray-800 pb-2 w-[90%] md:w-[80%] pl-2'>Liked Songs</h1>
        <div className='w-full h-[65%] md:h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-8 overflow-y-auto mb-20 md:w-[85%]'>
          {songs.map((song) => (
            <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.songIndex} key={song.songIndex} />
          ))}
        </div></>
        :
        <div className='text-gray-700 text-[30px] text-semibold'>No Liked Songs</div>
      }

    </div>
  )
}

export default Liked
