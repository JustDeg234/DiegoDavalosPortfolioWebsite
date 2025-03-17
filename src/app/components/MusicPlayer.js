"use client";

import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); // Default volume at 50%
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Ensure the audio starts from the beginning if it ended
      if (audioRef.current.ended) {
        audioRef.current.currentTime = 0;
      }
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/background-music.mp3');
    audioRef.current.loop = true; // Enable looping
    audioRef.current.volume = volume; // Set initial volume
    
    // Add ended event listener to ensure looping works
    const handleEnded = () => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    };
    
    audioRef.current.addEventListener('ended', handleEnded);
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-2">
      {/* Volume Slider - Only visible when music is playing */}
      {isPlaying && (
        <div className="bg-[#0f1e2e] p-2 rounded-lg border border-[#1e2937] transform transition-all duration-300">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-24 h-1 bg-[#4a7397] rounded-lg appearance-none cursor-pointer"
          />
        </div>
      )}
      
      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="bg-[#0f1e2e] p-4 rounded-full shadow-lg border border-[#1e2937] hover:bg-[#162c44] transition-all duration-300 group"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a7397]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4a7397]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        <span className="absolute -top-8 right-0 bg-[#0f1e2e] px-3 py-1 rounded text-sm text-[#4a7397] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </span>
      </button>
    </div>
  );
} 