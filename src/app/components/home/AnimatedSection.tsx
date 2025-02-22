'use client';

import { motion } from 'framer-motion';

export default function AnimatedSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.p 
          className="text-gray-400 text-lg opacity-70 hover:opacity-100 hover:translate-x-2 transition-all duration-300 cursor-default"
        >
          This paragraph animates on hover. It will slide slightly to the right and become fully opaque. The content is engaging and interactive, making the user experience more dynamic and interesting.
        </motion.p>

        <motion.p 
          className="text-gray-400 text-lg opacity-70 hover:opacity-100 hover:translate-x-2 transition-all duration-300 cursor-default"
        >
          This paragraph animates on hover. It will slide slightly to the right and become fully opaque. The content is engaging and interactive, making the user experience more dynamic and interesting.
        </motion.p>
      </motion.div>
    </div>
  );
} 