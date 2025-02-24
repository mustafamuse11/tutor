'use client';

import { useState } from 'react';
import SignInModal from './auth/SignInModal';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] text-transparent bg-clip-text">
                Logo
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsSignInOpen(true)}
                className="px-10 py-3 text-[16px] font-medium text-white 
                         bg-gradient-to-r from-[#04F9FC] to-[#BF1CF0]
                         rounded-full transition-all duration-300
                         hover:shadow-[0_0_20px_rgba(4,249,252,0.5)]
                         hover:opacity-90"
              >
                Log In
              </button>
              <button
                onClick={() => router.push('/auth/signup')}
                className="px-10 py-3 text-[16px] font-medium
                         text-white rounded-full
                         transition-all duration-300
                         border border-[#7573F7]/50
                         hover:border-[#BF1CF0]/50
                         hover:shadow-[0_0_20px_rgba(191,28,240,0.3)]"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SignInModal 
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />
    </>
  );
} 