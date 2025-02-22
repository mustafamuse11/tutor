'use client';

import { useState } from 'react';

export default function SingInModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Modal Trigger Button */}
      <button
        onClick={openModal}
        className="text-white hover:text-gray-200 transition-colors"
      >
        Log In
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative">
            {/* Close button */}
            <button onClick={closeModal} className="absolute right-6 top-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Logo and Welcome text */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Your Logo</h3>
              <h2 className="text-2xl font-bold mb-2">Welcome</h2>
              <p className="text-gray-600">Log in to continue to your account.</p>
            </div>

            {/* Google Sign In */}
            <button className="w-full py-3 px-4 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition-colors mb-6">
              Continue with Google
            </button>

            {/* Email Input */}
            <div>
              <label className="block text-[#8B5CF6] text-sm mb-2">
                Email address*
              </label>
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
              />
            </div>

            {/* Continue Button */}
            <button className="w-full bg-[#8B5CF6] text-white py-3 rounded-full mt-6 hover:bg-[#7C3AED] transition-colors">
              Continue
            </button>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-[#8B5CF6] hover:text-[#7C3AED]">Sign up</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}