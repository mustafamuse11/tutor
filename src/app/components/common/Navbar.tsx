'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SignInModal } from '../forms/AuthForms';
import { SignUpModal } from '../forms/SignUpModal';

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);


  

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              YourBrand
            </Link>
          </div>

          {/* Right Side Navigation and Auth */}
          <div className="flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="hidden sm:flex sm:items-center sm:space-x-10">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' }
              ].map((item: {name: string, href: string}) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white px-4 py-2 text-base font-medium tracking-wide transition-colors duration-200 ease-in-out relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-8 py-2 rounded-full border-2 border-white text-white hover:bg-gradient-to-r from-[#6366f1] to-[#5558e6] hover:border-transparent transition-all"
              >
                Log In
              </button>
              <button
                onClick={() => setShowSignUpModal(true)}
                className="px-8 py-2 rounded-full bg-[#6366f1] hover:bg-gradient-to-r from-[#6366f1] to-[#5558e6] text-white transition-all"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SignInModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      <SignUpModal 
        isOpen={showSignUpModal} 
        onClose={() => setShowSignUpModal(false)} 
      />
    </nav>
  );
}
