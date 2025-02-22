'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-transparent bg-clip-text">
            Transform Your Future With Our Courses
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Learn from industry experts and take your skills to the next level
          </p>
          <button 
            onClick={scrollToCourses}
            className="bg-[#00E5FF] text-black font-medium px-8 py-3 rounded-full hover:bg-[#00B8D4] transition-colors"
          >
            Get Started
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-full h-[400px]">
            <Image
              src="https://t3.ftcdn.net/jpg/05/73/88/16/360_F_573881698_hwhzbRGAXwdDqhzWR9BbOMb5A6dcLk2r.jpg"
              alt="Hero Image"
              fill
              className="object-cover rounded-2xl"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 