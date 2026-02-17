import React, { useEffect, useState } from 'react'
import { TiHome } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { RiPlayListLine } from "react-icons/ri";
import { IoIosHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

function Nav() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '')

  useEffect(()=>{
    if(!username){
      try{
        const name = window.prompt('Welcome! What is your name?', '')
        if(name && name.trim()){ 
          localStorage.setItem('username', name.trim())
          setUsername(name.trim())
        }
      }catch(e){}
    }
  },[])
  const location = useLocation()
  const active = location.pathname || '/'

  const items = [
    {to: '/', Icon: TiHome, key: 'home'},
    {to: '/search', Icon: IoIosSearch, key: 'search'},
    {to: '/playlist', Icon: RiPlayListLine, key: 'playlist'},
    {to: '/liked', Icon: IoIosHeart, key: 'liked'},
  ]

  return (
    <div className='w-full left-0 right-0 h-[80px] bg-black fixed bottom-0 md:top-0 text-white flex items-center justify-center p-[12px] z-50 rounded-t-[30px] md:rounded-none relative'>
      <div className='absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6'>
        {items.map(it=>{
          const Icon = it.Icon
          const isActive = active === it.to
          return (
            <Link key={it.key} to={it.to} className={`${isActive? 'opacity-100':'opacity-75'} text-white`}>
              <Icon className='w-[25px] h-[25px]'/>
            </Link>
          )
        })}
      </div>

      <div className='absolute right-4 hidden md:flex items-center gap-2'>
        <FaUser className='w-[20px] h-[20px]'/>
        <div className='text-sm text-gray-200'>{username || 'Guest'}</div>
      </div>
    </div>
  )
}

export default Nav
