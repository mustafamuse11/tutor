'use client';

import { motion } from 'framer-motion';

export default function CourseSection() {
  const courses = [
    {
      title: "Web Development",
      description: "Master modern web development with React, Next.js, and cutting-edge technologies",
      image: "/web-dev.jpg"
    },
    {
      title: "UI/UX Design",
      description: "Create stunning user interfaces and seamless user experiences with modern design principles",
      image: "/uiux.jpg"
    },
    {
      title: "Mobile Development",
      description: "Build powerful native mobile applications with React Native and Flutter frameworks",
      image: "/mobile-dev.jpg"
    },
    {
      title: "Data Science",
      description: "Dive into data analysis, machine learning, and advanced visualization techniques",
      image: "/data-science.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[#020817] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Our Courses
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#2A2A3F] rounded-xl overflow-hidden shadow-lg 
                         transition-all duration-300 ease-in-out
                         hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]
                         hover:border-pink-500 border-2 border-transparent
                         transform hover:-translate-y-1"
              style={{
                transform: 'translateZ(0)',
              }}
            >
              <div className="relative h-52">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A3F] to-transparent opacity-50"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {course.description}
                </p>
                <div className="flex justify-end">
                  <button className="bg-[#00E5FF]/90 text-black px-6 py-2 rounded-lg 
                                   hover:bg-[#00E5FF] transition-all duration-300 text-sm font-medium
                                   hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]
                                   transform hover:-translate-y-0.5">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
