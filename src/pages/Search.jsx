import React, { useEffect, useState, useContext } from 'react'
import Player from '../components/Player'
import { IoSearchSharp } from "react-icons/io5";
import Card from '../components/Card';
import { ActivePageContext } from '../context/ActivePageContext'
import { datacontext } from '../context/UserContext';

function Search() {
  let [input, setInput] = useState("")
  let [newList, setNewList] = useState([])
  const { active } = useContext(ActivePageContext)
  const [isFocused, setIsFocused] = useState(false)
  const { songs } = useContext(datacontext)

  useEffect(() => {
    const q = input.toLowerCase().trim()
    if (!q) {
      setNewList([])
      return
    }
    let a = songs.filter((song) => (song.name.toLowerCase().includes(q) || song.singer.toLowerCase().includes(q)))
    setNewList(a)
  }, [input, songs])

  return (
    <div className={`w-full min-h-[80vh] bg-black flex justify-start items-center flex-col pt-[12px] md:pt-[60px] gap-[30px] transition-opacity duration-300 ${active === '/search' ? 'opacity-100' : 'opacity-30'}`}>
      <Player />

      <form action="" className='w-[90%] md:w-[60%] mt-4 sm:mt-10 mx-auto' onSubmit={(e) => { e.preventDefault() }}>
        <div className={`w-full h-[60px] md:h-[70px] rounded-full flex items-center gap-4 px-6 transition-all duration-300 ${isFocused ? 'bg-gray-800/80 ring-2 ring-neon-yellow shadow-[0_0_20px_rgba(223,255,0,0.2)]' : 'bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50'}`}>
          <IoSearchSharp className={`text-[24px] transition-colors ${isFocused ? 'text-neon-yellow' : 'text-gray-400'}`} />
          <input
            type="text"
            className={`flex-1 h-full bg-transparent outline-none border-0 text-white text-[18px] md:text-[22px] font-medium placeholder-gray-500`}
            placeholder='Search songs, artists or albums'
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </form>

      {input ? (
        <div className='w-[90%] md:w-[85%] mx-auto mt-8 h-full'>
          <h2 className='text-white text-2xl font-bold mb-6'>Top Results</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-32'>
            {newList.length > 0 ? newList.map((song) => (
              <Card name={song.name} image={song.image} singer={song.singer} songIndex={songs.findIndex(s => s.id === song.id)} key={song.id} />
            )) : <div className='col-span-full text-center text-gray-400 mt-10 text-xl font-medium'>No results found for "{input}"</div>}
          </div>
        </div>
      ) : (
        <div className='w-[90%] md:w-[85%] mx-auto mt-8 flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-white text-2xl font-bold'>Browse All</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pb-32'>
              {songs.map((song, idx) => (
                <Card name={song.name} image={song.image} singer={song.singer} songIndex={idx} key={song.id} />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Search