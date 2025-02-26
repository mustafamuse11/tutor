'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from "../icons/BriefcaseIcon";
import { LaptopIcon } from "../icons/LaptopIcon";
import { UsersIcon } from "../icons/UsersIcon";
import { RocketIcon } from "../icons/RocketIcon";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-[#00E5FF] text-5xl font-bold text-center mb-4"
        >
          Who Will Benefit Most
        </motion.h2>
        <motion.p 
          className="text-gray-200 text-xl text-center max-w-4xl mx-auto mb-16"
        >
          Your Path to Success Starts Here
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Skilled Professionals */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#001B3D] flex items-center justify-center">
              <BriefcaseIcon />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Business Owners</h3>
            <p className="text-gray-200 text-center">
              Scale your empire with proven dropshipping strategies—boost profits without the inventory hassle
Perfect for entrepreneurs who want to grow their existing ventures efficiently.
            </p>
          </div>

          {/* Content Creators */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#001B3D] flex items-center justify-center">
              <LaptopIcon />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Salesmen</h3>
            <p className="text-gray-200 text-center">
             Turn your sales skills into a money-making machine—master online selling and cash in on dropshipping
Ideal for go-getters who already know how to close deals and want a new avenue to shine.
            </p>
          </div>

          {/* Service Providers */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#001B3D] flex items-center justify-center">
              <UsersIcon />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Unemployed</h3>
            <p className="text-gray-200 text-center">
              No job? No problem—learn to sell online and build your own income stream from scratch with dropshipping
A lifeline for anyone looking to take control and start earning without a traditional gig.
            </p>
          </div>

          {/* Aspiring Entrepreneurs */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#001B3D] flex items-center justify-center">
              <RocketIcon />
            </div>
            <h3 className="text-white text-xl font-bold mb-3">Suppliers</h3>
            <p className="text-gray-200 text-center">
              Partner with a network of eager sellers—expand your reach and move product faster through dropshipping
Great for those with goods to offer who want to connect with motivated online sellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 