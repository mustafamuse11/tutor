'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Store email in session storage
      sessionStorage.setItem('resetEmail', email);
      
      // Immediately navigate to reset password page
      router.push('/auth/reset-password');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button 
          onClick={() => router.push('/')}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Forgot Password
        </h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          Enter your email address
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20
                       text-gray-600 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#6366F1] text-white py-2.5 rounded-lg text-sm font-medium
                     hover:bg-[#5458E9] transition-colors disabled:opacity-70"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
} 