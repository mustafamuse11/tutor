'use client'

import { motion } from 'framer-motion'
import { FaUserGraduate, FaClock, FaHeadset } from 'react-icons/fa'

const FeatureSection = () => {
  const features = [
    {
      title: "1-on-1 Tutoring",
      description: "Highly Personalized Instruction",
      icon: <FaUserGraduate className="w-12 h-12 text-blue-500 animate-pulse" />,
      items: [
        "Highly Personalized Instruction",
        "Network of Rigorously Vetted Tutors",
        "Purpose-Built Learning Interface"
      ]
    },
    {
      title: "Unlimited Learning",
      description: "Learn at your own pace",
      icon: <FaClock className="w-12 h-12 text-blue-500 animate-pulse" />,
      items: [
        "Live Small Group Classes",
        "On-Demand Lessons",
        "Assessments & Practice",
        "Seasonal Learning Programs"
      ]
    },
    {
      title: "Instant Help",
      description: "24/7 Support Available",
      icon: <FaHeadset className="w-12 h-12 text-blue-500 animate-pulse" />,
      items: [
        "Instant Tutoring",
        "24/7 Tutor Chat and AI Tutor Support",
        "Expert Essay Review"
      ]
    }
  ]

  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-blue-500 tracking-widest uppercase mb-3">
              Why Choose Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elevate Your Learning Journey
            </h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              One membership for your entire household. Whether you want to get ahead, catch up, 
              or learn for the joy of it, we offer a personalized approach to reaching your goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm 
                        border border-blue-500/50 transition-all duration-300
                        shadow-[0_0_20px_rgba(59,130,246,0.3)]
                        animate-glow"
            >
              <div className="space-y-4">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <svg 
                        className="w-5 h-5 text-blue-500"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      <span className="text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection 