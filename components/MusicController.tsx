"use client"

import React, { useState, useRef, useEffect } from "react";

export default function MusicController() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-4 right-4 z-[1000]">
      <button
        onClick={() => setIsPlaying((p) => !p)}
        className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full shadow-lg w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center focus:outline-none border-2 border-white transition-all duration-200 active:scale-95"
        title={isPlaying ? 'Mute Music' : 'Play Music'}
        aria-label={isPlaying ? 'Mute Music' : 'Play Music'}
      >
        {/* Music note icon for play/mute */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth={2} />
        </svg>
      </button>
      <audio
        ref={audioRef}
        src="/Anthem/billions music.mp3"
        autoPlay
        loop
        controls={false}
        className="hidden"
      />
    </div>
  );
}
