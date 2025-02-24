'use client';

import { motion } from 'framer-motion';

export default function CourseSection() {
  return (
    <div id="courses" className="bg-[#020817] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] bg-clip-text text-transparent mb-16">
          Our Courses
        </h2>
        
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Web Development Card */}
          <div className="bg-[#1E293B]/40 backdrop-blur-sm rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(4,249,252,0.2)] transition-all duration-300 group min-h-[280px]">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="md:w-2/5">
                <img
                  src="/web-development.jpg"
                  alt="Web Development"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Web Development
                  </h3>
                  <p className="text-gray-400">
                    Master modern web development with React, Next.js, and cutting-edge technologies. Learn from industry experts and build real-world projects.
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
                  alt="UI/UX Design"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-400">
                    Create stunning user interfaces and seamless user experiences with modern design principles. Learn the latest tools and techniques in UI/UX.
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
                  alt="Mobile Development"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Mobile App Development
                  </h3>
                  <p className="text-gray-400">
                    Build native mobile applications for iOS and Android using React Native and Flutter. Learn app development from concept to deployment.
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
                  alt="Data Science"
                  className="w-full h-[240px] object-cover rounded-xl"
                />
              </div>
              <div className="md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Data Science
                  </h3>
                  <p className="text-gray-400">
                    Learn data analysis, machine learning, and AI with Python and modern data science tools. Master the skills needed for data-driven decision making.
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
