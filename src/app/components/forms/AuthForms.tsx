'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen }: SignInModalProps) {
  const router = useRouter();

  const handleClose = () => {
    // Force a hard navigation to home page
    window.location.href = '/';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full mx-4 relative">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl font-bold">Your Logo</h1>
        </div>

        {/* Welcome Text */}
        <h2 className="text-[1.75rem] font-semibold text-center text-gray-900 mb-2">
          Welcome
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Log in to continue to your account.
        </p>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-full text-gray-700 font-medium hover:bg-[#6366f1] hover:text-white hover:border-transparent transition-all mb-6">
          Continue with Google
        </button>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#6366f1] mb-2">
            Email address*
          </label>
          <input
            type="email"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            placeholder="Enter your email"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-[#6366f1] hover:bg-[#5558e6] text-white py-2.5 rounded-full transition-all font-medium mb-4">
          Continue
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-900">
          Don't have an account?{' '}
          <Link href="/auth/sign-up" className="text-[#6366f1] hover:text-[#5558e6]">
            Sign up
          </Link>
        </p>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
