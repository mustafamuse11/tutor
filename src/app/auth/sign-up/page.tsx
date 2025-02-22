'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SignUpModal } from '../../components/forms/SignUpModal';

export default function SignUpPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Redirect to home page when X is clicked
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUpModal isOpen={true} onClose={handleClose} />
    </div>
  );
}
