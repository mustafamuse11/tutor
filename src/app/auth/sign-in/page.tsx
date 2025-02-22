'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { SignInModal } from '../../components/forms/AuthForms';

export default function SignInPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignInModal isOpen={true} onClose={handleClose} />
    </div>
  );
}
