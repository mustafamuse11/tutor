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
        
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Web Development Card */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(4,249,252,0.2)] transition-all duration-300 group min-h-[280px]">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="md:w-2/5">
                <img
                  src="/jumia.jpg"
                    alt="Jumia Selling Mastery"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Jumia Selling Mastery
                  </h3>
                  <p className="text-gray-200">
                   Become a pro at selling on Jumia with our expert-led live Zoom training. Master platform optimization, effective listing strategies, and sales growth techniques. Gain hands-on skills over one month, guided by industry professionals, and boost your e-commerce success.
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(4,249,252,0.6)] transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design Card */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(4,249,252,0.2)] transition-all duration-300 group min-h-[280px]">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="md:w-2/5">
                <img
                  src="/ui-ux-design.jpg"
                  alt="Kilimall Selling Mastery"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                   Kilimall Selling Mastery
                  </h3>
                  <p className="text-gray-200">
                   Excel at selling on Kilimall with our expert-led live Zoom training. Master store setup, product listing optimization, and sales strategies. Develop practical skills over one month, guided by industry pros, and maximize your e-commerce profits.
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(4,249,252,0.6)] transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Development Card */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(4,249,252,0.2)] transition-all duration-300 group min-h-[280px]">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="md:w-2/5">
                <img
                  src="/mobile-development.jpg"
                  alt="Jiji Selling Mastery"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                  Jiji Selling Mastery
                  </h3>
                  <p className="text-gray-200">
                  Dominate selling on Jiji with our expert-led live Zoom training. Master product listings, pricing tactics, and customer engagement. Build essential skills over one month, guided by industry experts, and elevate your online marketplace success.".
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(4,249,252,0.6)] transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Data Science Card */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(4,249,252,0.2)] transition-all duration-300 group min-h-[280px]">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="md:w-2/5">
                <img
                  src="/data-science.jpg"
                  alt="Personal Development Guidance"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                   Personal Development Guidance
                  </h3>
                  <p className="text-gray-200">
                   Embark on your path with our expert-led live Zoom guidance. Discover your goals, enhance your skills, and learn basics like creating emails and how online works. Receive personalized support over one month, guided by professionals, to build confidence and kickstart your journey."
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="bg-[#04F9FC] text-black px-8 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(4,249,252,0.6)] transition-all duration-300 hover:scale-105">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
