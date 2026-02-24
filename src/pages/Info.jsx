import React from 'react'
import { FaKeyboard, FaMusic, FaCheckCircle } from 'react-icons/fa'

function Info() {
    return (
        <div className='w-full min-h-screen text-white p-6 md:px-12 flex flex-col items-center'>
            <div className='max-w-3xl w-full'>
                <h1 className='text-4xl md:text-5xl font-bold mb-8 text-neon-yellow drop-shadow-[0_0_10px_rgba(223,255,0,0.5)]'>Features & Info</h1>

                <div className='space-y-8'>
                    {/* Features Section */}
                    <div className='bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-md'>
                        <h2 className='text-2xl font-semibold mb-4 text-neon-yellow flex items-center gap-2'>
                            <FaCheckCircle /> Key Features
                        </h2>
                        <ul className='space-y-3 text-gray-300'>
                            <li className='flex items-start gap-3'>
                                <span className='text-neon-yellow mt-1'>✦</span>
                                <p><strong className='text-white'>Neon Aesthetic:</strong> Sleek black and neon-yellow high-contrast UI with dynamic gradients.</p>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-neon-yellow mt-1'>✦</span>
                                <p><strong className='text-white'>Local Uploads:</strong> Upload and play your own .mp3 and .m4a files directly in the browser.</p>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-neon-yellow mt-1'>✦</span>
                                <p><strong className='text-white'>Seamless Playback:</strong> Advanced music player with volume control and seek formatting.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Shortcuts Section */}
                    <div className='bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-md'>
                        <h2 className='text-2xl font-semibold mb-4 text-neon-yellow flex items-center gap-2'>
                            <FaKeyboard /> Keyboard Shortcuts
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex justify-between items-center bg-black/40 p-3 rounded-lg border border-gray-800'>
                                <span className='text-gray-300'>Next Song</span>
                                <kbd className='bg-gray-800 text-neon-yellow px-3 py-1 rounded border border-gray-700 font-mono'>→</kbd>
                            </div>
                            <div className='flex justify-between items-center bg-black/40 p-3 rounded-lg border border-gray-800'>
                                <span className='text-gray-300'>Previous Song</span>
                                <kbd className='bg-gray-800 text-neon-yellow px-3 py-1 rounded border border-gray-700 font-mono'>←</kbd>
                            </div>
                            <div className='flex justify-between items-center bg-black/40 p-3 rounded-lg border border-gray-800'>
                                <span className='text-gray-300'>Skip 10s forward</span>
                                <kbd className='bg-gray-800 text-neon-yellow px-3 py-1 rounded border border-gray-700 font-mono'>↑</kbd>
                            </div>
                            <div className='flex justify-between items-center bg-black/40 p-3 rounded-lg border border-gray-800'>
                                <span className='text-gray-300'>Skip 10s backward</span>
                                <kbd className='bg-gray-800 text-neon-yellow px-3 py-1 rounded border border-gray-700 font-mono'>↓</kbd>
                            </div>
                            <div className='flex justify-between items-center bg-black/40 p-3 rounded-lg border border-gray-800'>
                                <span className='text-gray-300'>Play / Pause</span>
                                <kbd className='bg-gray-800 text-neon-yellow px-3 py-1 rounded border border-gray-700 font-mono'>Space</kbd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
