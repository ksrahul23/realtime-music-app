import React, { useEffect, useState, useContext, useRef } from 'react'
import { TiHome } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { RiPlayListLine } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaUser, FaInfoCircle, FaFileUpload } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { datacontext } from '../context/UserContext'

function Nav() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '')

  useEffect(() => {
    if (!username) {
      try {
        const name = window.prompt('Welcome! What is your name?', '')
        if (name && name.trim()) {
          localStorage.setItem('username', name.trim())
          setUsername(name.trim())
        }
      } catch (e) { }
    }
  }, [])
  const location = useLocation()
  const active = location.pathname || '/'
  const { addLocalSong } = useContext(datacontext)
  const fileInputRef = useRef(null)

  const handleUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      addLocalSong(file)
    }
  }

  const items = [
    { to: '/', Icon: TiHome, key: 'home' },
    { to: '/search', Icon: IoIosSearch, key: 'search' },
    { to: '/playlist', Icon: RiPlayListLine, key: 'playlist' },
    { to: '/liked', Icon: IoIosHeart, key: 'liked' },
    { to: '/info', Icon: FaInfoCircle, key: 'info' },
  ]

  return (
    <div className='w-full left-0 right-0 h-[80px] bg-black fixed bottom-0 md:top-0 text-white flex items-center justify-center p-[12px] z-50 rounded-t-[30px] md:rounded-none relative'>
      <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6'>
        {items.map(it => {
          const Icon = it.Icon
          const isActive = active === it.to
          return (
            <Link key={it.key} to={it.to} className={`${isActive ? 'text-neon-yellow scale-110 drop-shadow-[0_0_8px_rgba(223,255,0,0.8)]' : 'text-gray-400 hover:text-neon-yellow'} transition-all duration-300`}>
              <Icon className='w-[25px] h-[25px]' />
            </Link>
          )
        })}
      </div>

      <div className='absolute right-4 hidden md:flex items-center gap-4'>
        <input type='file' accept='.mp3, .m4a' className='hidden' ref={fileInputRef} onChange={handleUpload} />
        <button onClick={() => fileInputRef.current.click()} className='text-neon-yellow flex items-center gap-2 border border-neon-yellow px-3 py-1 rounded hover:bg-neon-yellow hover:text-black transition-all cursor-pointer'>
          <FaFileUpload /> <span className='text-sm font-semibold'>Upload</span>
        </button>
        <div className='flex items-center gap-2 text-neon-yellow'>
          <FaUser className='w-[18px] h-[18px]' />
          <div className='text-sm font-medium'>{username || 'Guest'}</div>
        </div>
      </div>
    </div>
  )
}

export default Nav
