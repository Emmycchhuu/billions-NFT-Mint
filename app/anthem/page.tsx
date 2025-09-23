"use client"




import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useRef, useState } from "react"

export default function AnthemPage() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-2 sm:py-12 sm:px-4 bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 relative overflow-hidden">
      <nav className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-2">
        <div className="mx-auto w-full max-w-full sm:max-w-xl md:max-w-2xl bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-6 py-2 sm:py-3 shadow-lg overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between sm:justify-center sm:space-x-6 min-w-0">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                <img src="/logo.png" alt="Billions" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="text-lg sm:text-xl font-black text-purple-600 truncate">Billions</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                <a href="https://opensea.io/collection/billions-genesis" target="_blank" rel="noopener noreferrer">
                  Mint
                </a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                <Link href="/learn-more">Learn More</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-3 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap"
              >
                <Link href="/anthem">Anthem</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-2xl w-full text-center mb-8 sm:mb-10">
        <img src="/logo.png" alt="Billions Logo" className="w-20 h-20 mx-auto mb-4 animate-pulse mt-20 sm:mt-24" />
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-2 drop-shadow-xl">Billions Anthem</h1>
        <p className="text-lg sm:text-2xl text-white/80 mb-6 font-semibold drop-shadow">The official anthem of the Billions Network</p>
      </div>
      {/* Video Card */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-8">
        <div className="relative w-full bg-[var(--card)]/90 rounded-3xl shadow-2xl overflow-hidden border border-white/20 backdrop-blur-xl">
          {/* Play icon overlay, only show if not playing */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="bg-black/30 rounded-full p-4 shadow-lg flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.7" />
                  <polygon points="20,16 36,24 20,32" fill="#0ea5e9" />
                </svg>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            controls
            className="w-full aspect-video rounded-3xl bg-black"
            poster="/billions-banner.png"
            style={{zIndex:1}}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handlePause}
          >
            <source src="/Anthem/billions vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-6 mb-2 drop-shadow">Watch the Anthem Video</h2>
        <p className="text-white/80 mb-4">Experience the official Billions anthem in video form.</p>
      </div>
      {/* Audio Card */}
      <div className="w-full max-w-md flex flex-col items-center mb-8">
        <div className="bg-[var(--card)]/90 rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 flex flex-col items-center backdrop-blur-xl w-full">
          <div className="flex items-center mb-4">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#0ea5e9" fillOpacity="0.7" />
              <rect x="18" y="16" width="4" height="16" rx="2" fill="white" />
              <rect x="26" y="16" width="4" height="16" rx="2" fill="white" />
            </svg>
            <span className="ml-3 text-xl font-bold text-[var(--primary)]">Listen to the Anthem</span>
          </div>
          <audio controls className="w-full rounded-xl bg-black">
            <source src="/Anthem/billions music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/"
          className="bg-white/30 hover:bg-white/40 text-white font-bold px-8 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
        >
          ← Back
        </a>
      </div>
      <p className="text-white/80 font-bold text-sm sm:text-base mt-4">
        © 2025 Billions Playground. Made with <span style={{color:'#0ea5e9'}}>❤️</span> for the community.
      </p>
    </div>
  )
}
