'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      router.push('/auth/signin');
      onClose();
    }
  }, [isOpen, router, onClose]);

  return null;
} 