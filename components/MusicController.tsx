"use client"

import React, { useState, useRef, useEffect } from "react";

export default function MusicController() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      // Try to autoplay on load
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
        setIsPlaying(false); // fallback → show play button
      });
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed z-[1000] right-4 top-4 sm:top-4 sm:right-4 w-auto flex justify-end">
      {/* On mobile, move button below header */}
      <div className="w-full flex justify-end sm:justify-end">
        <div className="sm:relative sm:top-0 sm:right-0 absolute top-20 right-4 sm:top-4 sm:right-4">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full shadow-lg w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center focus:outline-none border-2 border-white transition-all duration-200 active:scale-95"
            title={isPlaying ? "Pause Music" : "Play Music"}
            aria-label={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? (
              // Pause icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              // Play icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-5.197-3.029A1 1 0 008 9.029v5.942a1 1 0 001.555.832l5.197-3.029a1 1 0 000-1.706z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src="/Anthem/billions music.mp3"
        loop
        controls={false}
        className="hidden"
      />
    </div>
  );
}
