'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoClose } from 'react-icons/io5';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    router.push('/'); // This will navigate directly to the home page
  };

  return (
    <div className="fixed inset-0 bg-[#1A0B2E] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[440px] bg-white rounded-[24px] p-7">
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 
                   transition-colors rounded-full p-1 hover:bg-gray-100"
        >
          <IoClose size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="text-[28px] font-semibold text-gray-900">Create Account</h1>
          <p className="text-gray-600 mt-2">Sign up to continue to your account.</p>
        </div>

        {/* Google Sign In */}
        <button 
          type="button"
          className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 
                   transition-all duration-200 rounded-[14px] border border-gray-200
                   flex items-center justify-center gap-3 mt-4 active:scale-[0.99]"
        >
          <FcGoogle className="w-5 h-5" />
          <span className="text-gray-700">Continue with Google</span>
        </button>

        {/* Divider */}
        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-gray-500 bg-white text-sm">
              OR CONTINUE WITH EMAIL
            </span>
          </div>
        </div>

        {/* Email Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Email Address
            </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full h-11 px-4 rounded-[14px] border border-gray-200
                     focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                     transition-all duration-200 text-gray-900"
            />
          </div>

          <div className="mt-2">
            <label className="block text-sm text-gray-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input 
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-11 px-4 rounded-[14px] border border-gray-200
                       focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500
                       transition-all duration-200 text-gray-900 pr-12"
              />
              <div 
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 
                       hover:text-gray-600 transition-colors p-2 cursor-pointer"
              >
                {passwordVisible ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </div>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full h-11 bg-[#6C63FF] hover:bg-[#5A51DD] mt-8
                   transition-all duration-200 rounded-[14px] text-white font-medium
                   focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/50
                   active:scale-[0.99]"
          >
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <div className="text-center mt-5">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link 
              href="/auth/signin" 
              className="text-[#6C63FF] hover:text-[#5A51DD] font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 