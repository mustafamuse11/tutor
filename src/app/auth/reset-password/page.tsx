'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Get email from session storage
    const resetEmail = sessionStorage.getItem('resetEmail');
    if (!resetEmail) {
      router.push('/auth/forgot-password');
      return;
    }
    setEmail(resetEmail);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLoading(true);
    try {
      // Add your password reset logic here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Clear the stored email
      sessionStorage.removeItem('resetEmail');
      
      // Redirect to login
      router.push('/');
      alert('Password reset successful! Please log in with your new password.');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to reset password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
        <button 
          onClick={() => router.push('/')}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          New Password
        </h2>
        
        <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
          <p className="text-green-800 text-sm">
            Please create a new password that you don't use on any other site.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Create new password"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#6366F1]/20
                       text-gray-600 text-sm"
              required
            />
          </div>

          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
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
            {isLoading ? 'Processing...' : 'Change'}
          </button>
        </form>
      </div>
    </div>
  );
} 