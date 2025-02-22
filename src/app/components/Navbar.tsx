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
              <span className="text-white">Your</span>
              <span className="text-[#00E5FF]">Brand</span>
              <span className="text-[#00E5FF]">Logo</span>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSignInOpen(true)}
                className="px-8 py-2.5 text-[15px] font-medium text-white bg-[#6C2BD9] rounded-full hover:bg-[#5A1CB8] transition-all duration-300"
              >
                Log In
              </button>
              <button
                onClick={() => router.push('/auth/signup')}
                className="px-4 py-2 bg-[#6C63FF] text-white rounded-[14px] hover:bg-[#5A51DD]
                         transition-all duration-200 font-medium"
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