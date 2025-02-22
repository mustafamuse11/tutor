'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'bzJ7-Ljxq78'; // Extract video ID from your YouTube URL

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden"
          style={{
            aspectRatio: '16/9',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          ) : (
            <>
              {/* Video thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`
                }}
              />
              
              {/* Play button */}
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                onClick={handlePlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00E5FF] rounded-full flex items-center justify-center hover:bg-[#00B8D4] transition-colors"
                style={{
                  backgroundColor: 'rgba(0, 229, 255, 0.9)'
                }}
              >
                <svg 
                  className="w-8 h-8 text-[#1E1E2E]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
