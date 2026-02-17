import React, { useEffect, useState, useContext } from 'react'
import Player from '../components/Player'
import { IoSearchSharp } from "react-icons/io5";
import { songsData } from '../songs';
import Card from '../components/Card';
import { ActivePageContext } from '../context/ActivePageContext'

function Search() {
  let [input,setInput] = useState("")
  let [newList,setNewList] = useState([])
  const { active } = useContext(ActivePageContext)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(()=>{
    const q = input.toLowerCase().trim()
    if(!q){
      setNewList([])
      return
    }
    let a = songsData.filter((song)=>(song.name.toLowerCase().includes(q) || song.singer.toLowerCase().includes(q)))
    setNewList(a)
  },[input])

  return (
    <div className={`w-full min-h-[80vh] bg-black flex justify-start items-center flex-col pt-[12px] md:pt-[60px] gap-[30px] transition-opacity duration-300 ${active==='/search'?'opacity-100':'opacity-30'}`}>
      <Player/>

      <form action="" className='w-[90%] md:h-[60px] flex justify-center items-center md:-mt-[80px]' onSubmit={(e)=>{e.preventDefault()}}>
        <div className={`w-full bg-gray-800 h-[60px] rounded-lg flex items-center gap-4 p-3 transition-all md:w-[45%] md:focus-within:w-[60%]`}>
          <IoSearchSharp className='text-gray-200 text-[18px]'/>
          <input
            type="text"
            className={`flex-1 h-full bg-gray-800 outline-none border-0 text-white p-[10px] text-[18px]`}
            placeholder='Search songs, artists or albums'
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            onFocus={()=>setIsFocused(true)}
            onBlur={()=>setIsFocused(false)}
          />
        </div>
      </form>

      {input ? (
        <div className='w-full h-[65%] md:h-full flex flex-col justify-start items-center p-[10px] gap-5 overflow-auto'>
          {newList.map((song) => (
            <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1} key={song.id} />
          ))}
        </div>
      ) : (
        <div className='w-full flex flex-col items-center gap-6 p-[10px]'>
          <div className='w-[90%] md:w-[60%] bg-transparent flex flex-col gap-4 mx-auto'>
              <div className='bg-gray-800 rounded-lg p-4 min-h-[120px] flex flex-col w-full'>
              <div className='text-white font-semibold text-[18px]'>Recently Played</div>
              <div className='text-gray-400 text-sm mt-2'>You haven't played any songs yet.</div>
            </div>
          </div>

          <div className='w-[90%] md:w-[60%] flex flex-col gap-4 mx-auto'>
            <div className='text-white text-[20px] font-semibold'>Available Songs</div>
            <div className='flex flex-col gap-3'>
              {songsData.map((song) => (
                <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.id-1} key={song.id} />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Search