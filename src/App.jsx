import React, { useContext, useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import Liked from './pages/Liked'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ActivePageProvider from './context/ActivePageContext'
import { datacontext } from './context/UserContext'
import Info from './pages/Info'
import { useColor } from 'color-thief-react'

function App() {
  const { playingSong, index, songs, playSong, pauseSong, nextSong, prevSong, hasPlayed } = useContext(datacontext)

  const currentSongImage = playingSong && songs[index] ? songs[index].image : null;
  const { data: colorData } = useColor(currentSongImage, 'hex', { crossOrigin: 'anonymous' });
  const dominantColor = colorData || '#333300';

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore key events if the user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (playingSong) pauseSong();
        else if (hasPlayed) playSong();
      } else if (e.code === 'ArrowRight') {
        if (hasPlayed) nextSong();
      } else if (e.code === 'ArrowLeft') {
        if (hasPlayed) prevSong();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playingSong, playSong, pauseSong, nextSong, prevSong, hasPlayed]);

  const bgStyle = playingSong
    ? { background: `radial-gradient(circle at top, ${dominantColor}40 0%, #050505 60%, #000000 100%)`, transition: 'background 1.5s ease-in-out' }
    : { background: '#050505', transition: 'background 1.5s ease-in-out' };

  return (
    <BrowserRouter>
      <Nav />
      <div className='w-full min-h-screen pt-[20px] md:pt-[100px] pb-[110px] md:pb-0' style={bgStyle}>
        <ActivePageProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/playlist' element={<Playlist />} />
            <Route path='/liked' element={<Liked />} />
            <Route path='/info' element={<Info />} />
          </Routes>
        </ActivePageProvider>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
