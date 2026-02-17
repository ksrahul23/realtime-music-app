import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import Liked from './pages/Liked'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ActivePageProvider from './context/ActivePageContext'

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <div className='w-full min-h-screen pt-[20px] md:pt-[100px] pb-[110px] md:pb-0 bg-black'>
        <ActivePageProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/playlist' element={<Playlist/>}/>
            <Route path='/liked' element={<Liked/>}/>
          </Routes>
        </ActivePageProvider>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
