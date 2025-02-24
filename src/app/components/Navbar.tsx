'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between p-4 bg-[#020817]">
      <Link href="/" className="text-[#04F9FC] text-2xl font-bold bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] bg-clip-text text-transparent">
        Logo
      </Link>

      <div className="flex items-center gap-4">
        <Link
          href="/auth/signin"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-[#04F9FC] via-[#7573F7] to-[#BF1CF0] text-white font-medium"
        >
          Log In
        </Link>
        <Link
          href="/auth/signup"
          className="px-6 py-2 rounded-full border border-[#7573F7] text-white font-medium"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
} 