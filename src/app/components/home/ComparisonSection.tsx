'use client';

import { motion } from 'framer-motion';

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          My Journey
        </motion.h2>

        <div className="flex justify-center items-center relative">
          <div className="flex gap-8 items-center justify-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-[#2A2A3F] w-[400px]
                          transition-all duration-300 ease-in-out
                          hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]
                          hover:border-pink-500 border-2 border-transparent"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src="/comparison-1.jpg"
                alt="Before"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>

            {/* VS Circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="z-10 bg-[#00E5FF] w-14 h-14 rounded-full flex items-center justify-center
                         shadow-[0_0_30px_rgba(0,229,255,0.4)]
                         hover:shadow-[0_0_40px_rgba(0,229,255,0.6)]
                         transition-all duration-300"
            >
              <span className="text-black font-bold text-lg">VS</span>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden bg-[#2A2A3F] w-[400px]
                          transition-all duration-300 ease-in-out
                          hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]
                          hover:border-pink-500 border-2 border-transparent"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                src="/comparison-2.jpg"
                alt="After"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-200 text-center mt-12 text-lg font-medium"
        >
          From Humble Beginnings To Professional Excellence. Join Us On This Transformative Journey.
        </motion.p>
      </div>
    </section>
  );
}
