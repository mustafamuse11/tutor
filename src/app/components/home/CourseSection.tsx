'use client';

import { motion } from 'framer-motion';

export default function CourseSection() {
  return (
    <div id="courses" className="pt-8 pb-16 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular Courses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            
            
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Jumia Card */}
          <div className="flex flex-col md:flex-row gap-8 bg-[#0F172A] p-8 rounded-xl">
            <div className="md:w-1/2">
              <img
                src="/sell-on-jumia.jpg.webp"
                alt="Web Development"
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
              />
            </div>
            <div className="md:w-3/5 flex flex-col justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Jumia Selling Mastery
                </h3>
                <div className="space-y-4 text-gray-100">
                  <p className="flex items-start gap-3">
                    <span className="text-[#00E5FF] text-xl mt-1">✓</span>
                    Create Your Account - Set up your Jumia seller account with step-by-step guidance in real-time.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#00E5FF] text-xl mt-1">✓</span>
                    List Your Products - Craft compelling product listings with expert tips during live sessions.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#00E5FF] text-xl mt-1">✓</span>
                    Manage Your Orders - Handle orders efficiently with live training on order processing and customer service.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#00E5FF] text-xl mt-1">✓</span>
                    Manage Your Account Money - Learn to track and manage your earnings with live support on financial tools.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#00E5FF] text-xl mt-1">✓</span>
                    Know Tips to Sell More - Discover proven strategies to boost sales, shared by pros in interactive Zoom classes.
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[#00E5FF] text-xl mt-1">✓</span>
                    How to Calculate Pricing - Master pricing strategies with live calculations to maximize profit margins.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full 
                                 transition-all duration-300
                                 hover:bg-[#00E5FF] 
                                 hover:shadow-[0_0_20px_#04F9FC]
                                 hover:border-[#04F9FC]
                                 hover:translate-x-2
                                 transform">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Kilimall Card */}
          <div className="flex flex-col md:flex-row gap-8 bg-[#0F172A] p-8 rounded-xl">
            <div className="md:w-1/2">
              <img
                src="/sell-on-kili.webp"
                alt="UI/UX Design"
                className="w-full h-full object-cover rounded-xl"
                loading="eager"
              />
            </div>
            <div className="md:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Kilimall Selling Mastery
                </h3>
                <div className="space-y-2 text-gray-200">
                  <p className="flex items-center gap-2">
                    <span className="text-[#00E5FF]">✓</span>
                    Create Your Account - Set up your Kilimall seller account with step-by-step guidance in real-time.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00E5FF]">✓</span>
                    List Your Products - Craft compelling product listings with expert tips during live sessions.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00E5FF]">✓</span>
                    Manage Your Orders - Handle orders efficiently with live training on order processing and customer service.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00E5FF]">✓</span>
                    Manage Your Account Money - Learn to track and manage your earnings with live support on financial tools.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00E5FF]">✓</span>
                    Know Tips to Sell More - Discover proven strategies to boost sales, shared by pros in interactive Zoom classes.
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00E5FF]">✓</span>
                    How to Calculate Pricing - Master pricing strategies with live calculations to maximize profit margins.
                  </p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full 
                                 transition-all duration-300
                                 hover:bg-[#00E5FF] 
                                 hover:shadow-[0_0_20px_#04F9FC]
                                 hover:border-[#04F9FC]
                                 hover:translate-x-2
                                 transform">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* First Jiji Card */}
          <div className="flex flex-col md:flex-row gap-8 bg-[#0F172A] p-8 rounded-xl">
            <div className="md:w-1/2">
              <img
                src="/sell-on-jiji.jpg.webp"
                alt="Sell on Jiji"
                className="w-full h-[450px] object-cover rounded-xl"
                loading="eager"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Jiji Selling Mastery
              </h3>
              <div className="space-y-2 text-gray-200">
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Create Your Profile - Sign up easily and set up your seller account to start posting ads.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Post Your Ads - List your items with photos and details, reaching millions of potential buyers.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Connect with Buyers - Use Jiji Chat or phone to negotiate directly with buyers in real-time.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Choose Payment & Delivery - Agree on cash-on-delivery or other options, meeting safely in public places.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Boost with Premium - Use TOP promo to place your ad at the top of search results for faster sales.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Get Support - Get tips and feedback to improve your selling strategy through interactive sessions.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full 
                                 transition-all duration-300
                                 hover:bg-[#00E5FF] 
                                 hover:shadow-[0_0_20px_#04F9FC]
                                 hover:border-[#04F9FC]
                                 hover:translate-x-2
                                 transform">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Personal Development Card */}
          <div className="flex flex-col md:flex-row gap-8 bg-[#0F172A] p-8 rounded-xl">
            <div className="md:w-1/2">
              <img
                src="/personal.jpg"
                alt="Personal Development"
                className="w-full h-[450px] object-cover rounded-xl"
                loading="eager"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Personal Development Guidance
              </h3>
              <div className="space-y-2 text-gray-200">
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Master English Basics - We'll guide you to understand simple English, starting from scratch, until you're confident.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Create Emails Easily - We'll walk you through setting up emails step-by-step until you can do it on your own.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Buy Online with Confidence - We'll teach you to purchase products on platforms safely until you're comfortable shopping online.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Use Google and Zoom - We'll help you navigate Google and join Zoom calls until you can use them effortlessly.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-[#00E5FF]">✓</span>
                  Learn Computer Basics - We'll support you in mastering computer skills until you're successful with everyday tasks.
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full 
                                 transition-all duration-300
                                 hover:bg-[#00E5FF] 
                                 hover:shadow-[0_0_20px_#04F9FC]
                                 hover:border-[#04F9FC]
                                 hover:translate-x-2
                                 transform">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
