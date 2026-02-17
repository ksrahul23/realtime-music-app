import React from 'react'
import { FaGithub } from 'react-icons/fa'

function Footer(){
  return (
    <div className='w-full bg-black text-gray-300 flex flex-col md:flex-row justify-between items-center gap-3 p-4 mt-6'>
      <div className='text-sm'>© All rights reserved. Created by Rahul Kumar</div>
      <div className='flex items-center gap-3'>
        <a href='https://github.com/ksrahul23' target='_blank' rel='noreferrer' className='flex items-center gap-2 text-gray-300 hover:text-white'>
          <FaGithub className='w-[18px] h-[18px]'/>
          <span className='text-sm'>GitHub</span>
        </a>
      </div>
    </div>
  )
}

export default Footer
