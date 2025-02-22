'use client';

import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A0B2E] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-transparent bg-clip-text">50+</span>
          </h2>
          <p className="text-gray-400 text-center text-base">Students taught</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1A0B2E] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-[#FF69B4] to-[#FF1493] text-transparent bg-clip-text">4</span>
          </h2>
          <p className="text-gray-400 text-center text-base">Courses</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#1A0B2E] p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] text-transparent bg-clip-text">5+</span>
          </h2>
          <p className="text-gray-400 text-center text-base">Years of experience</p>
        </motion.div>
      </div>
    </div>
  );
}
