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
    <section className="min-h-screen bg-[#020817] relative overflow-hidden flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="relative w-full h-[450px]">
            <Image
              src="https://img.freepik.com/premium-photo/portrait-excited-young-man-using-laptop_171337-41698.jpg"
              fill
              className="object-cover rounded-3xl shadow-2xl shadow-[#04F9FC]/20"
              unoptimized alt={''}            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#04F9FC]/10 to-transparent" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#04F9FC]/10 via-[#7573F7]/10 to-[#BF1CF0]/10 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-[#04F9FC] text-sm font-medium">Welcome to Our Platform</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] text-transparent bg-clip-text leading-tight">
            Transform Your Future With Our Courses
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl">
            Learn from industry experts and take your skills to the next level. Join our community of successful learners today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToCourses}
              className="bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] text-white font-medium px-8 py-3 rounded-full 
              transition-all duration-300 hover:shadow-[0_0_20px_rgba(4,249,252,0.5)] 
              hover:scale-105 backdrop-blur-sm"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 