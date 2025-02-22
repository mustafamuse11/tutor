'use client';

import React from 'react';

export default function BenefitsSection() {
  return (
    <section className="px-8 lg:px-16 pt-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] text-transparent bg-clip-text">
          Who Will Benefit Most
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Business Men */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#1a1a2e] border-2 border-[#00E5FF] flex items-center justify-center mb-4 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300">
              <svg className="w-10 h-10 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center">Business Men</h3>
          </div>

          {/* Shopkeepers */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#1a1a2e] border-2 border-[#00E5FF] flex items-center justify-center mb-4 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300">
              <svg className="w-10 h-10 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2V3zm0 8h18m-18 4h6v8H3v-8zm8 0h6v8h-6v-8z" />
              </svg>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center">Shopkeepers</h3>
          </div>

          {/* Unemployed Youth */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#1a1a2e] border-2 border-[#00E5FF] flex items-center justify-center mb-4 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300">
              <svg className="w-10 h-10 text-[#00E5FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
              </svg>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center">Unemployed Youth</h3>
          </div>

          {/* Professionals */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-[#1a1a2e] border-2 border-[#00E5FF] flex items-center justify-center mb-4 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300">
              <svg className="w-10 h-10 text-[#00E5FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 8.5L12 15L23 8.5L12 2ZM1 12.5L12 19L23 12.5V16.5L12 23L1 16.5V12.5Z"/>
              </svg>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center">Professionals</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 