'use client';

import { motion } from 'framer-motion';

export default function BenefitsSection() {
  return (
    <section className="pt-8 pb-16 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-4xl lg:text-6xl font-bold mb-6 text-[#04F9FC]"
          >
            Who Will Benefit Most
          </motion.h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Skilled Professionals */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
                className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" 
              />
              <motion.div 
                initial={{ rotate: -30, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                viewport={{ once: false }}
                className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300"
              >
                <motion.svg 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: false }}
                  className="w-8 h-8 text-[#04F9FC]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </motion.div>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false }}
              className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300"
            >
              Business Owners
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false }}
              className="text-gray-200 text-sm leading-relaxed max-w-[280px] mx-auto"
            >
              Looking to expand your reach and boost profits? Learn how to sell online with proven strategies From setting up e-commerce I'll guide you to transform your business into a thriving online success. Join me and unlock your full potential today!
            </motion.p>
          </motion.div>

          {/* Content Creators */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: false }}
            className="group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false }}
                className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" 
              />
              <motion.div 
                initial={{ rotate: -30, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: false }}
                className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300"
              >
                <motion.svg 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: false }}
                  className="w-8 h-8 text-[#04F9FC]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
              </motion.div>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: false }}
              className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300"
            >
              Shop Keepers
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: false }}
              className="text-gray-200 text-sm leading-relaxed max-w-[280px] mx-auto"
            >
              Ready to take your store online and attract more customers? Discover simple steps to sell your products digitally with my expert guidance. From creating an online shop to driving sales, I'll help you grow your business effortlessly. Start your online journey with me now!
            </motion.p>
          </motion.div>

          {/* Service Providers */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: false }}
            className="group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: false }}
                className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" 
              />
              <motion.div 
                initial={{ rotate: -30, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                viewport={{ once: false }}
                className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300"
              >
                <motion.svg 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false }}
                  className="w-8 h-8 text-[#04F9FC]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </motion.svg>
              </motion.div>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: false }}
              className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300"
            >
              Unemployed youth
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: false }}
              className="text-gray-200 text-sm leading-relaxed max-w-[280px] mx-auto"
            >
              Want a new career selling online? I'll teach you the skills to start your own e-commerce venture, even with no experience. From product listing to marketing, gain the tools to earn income from home. Join me and turn your passion into a profitable online business!
            </motion.p>
          </motion.div>

          {/* Product Suppliers */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: false }}
            className="group text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: false }}
                className="absolute inset-0 rounded-full bg-[#04F9FC]/20 group-hover:blur-xl transition-all duration-300" 
              />
              <motion.div 
                initial={{ rotate: -30, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                viewport={{ once: false }}
                className="relative w-16 h-16 rounded-full border border-[#04F9FC]/30 flex items-center justify-center
                            bg-[#020817] group-hover:border-[#04F9FC] transition-colors duration-300"
              >
                <motion.svg 
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: false }}
                  className="w-8 h-8 text-[#04F9FC]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </motion.svg>
              </motion.div>
            </div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: false }}
              className="text-xl font-semibold text-white mb-3 group-hover:text-[#04F9FC] transition-colors duration-300"
            >
              Product Suppliers
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: false }}
              className="text-gray-200 text-sm leading-relaxed max-w-[280px] mx-auto"
            >
              Eager to reach new markets with your goods? Learn how to sell online effectively with my tailored advice for suppliers. From building a digital presence to connecting with buyers, I'll help you maximize your sales potential. Start expanding your reach with me today!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 