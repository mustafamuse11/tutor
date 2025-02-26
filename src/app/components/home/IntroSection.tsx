'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="pt-2 pb-4 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              ease: "easeOut"
            }}
            viewport={{ once: false }}
            className="text-[#8A6FDF] text-2xl mb-4 relative"
          >
            <motion.span
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="absolute bottom-0 left-0 h-[2px] bg-[#8A6FDF]/30"
            />
            Hello,
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut"
            }}
            viewport={{ once: false }}
            className="text-white text-5xl font-bold mb-6"
          >
            I'm Mustafa Muse.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut"
            }}
            viewport={{ once: false }}
            className="text-gray-300 text-lg mb-6 text-left"
          >
            I started my journey as a young entrepreneur in Kenya, determined to make a difference. Through years of learning and experimenting with digital marketing, I've helped countless small business owners to grow their businesses online.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut"
            }}
            viewport={{ once: false }}
            className="text-gray-300 text-lg text-left"
          >
            Today, I run multiple digital businesses, create digital products, and invest in real estate. Africa is full of opportunities—dropshipping, selling products, and building online businesses are accessible to anyone willing to take the leap. My journey proves that with determination, you can transform your life and empower others to do the same.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
