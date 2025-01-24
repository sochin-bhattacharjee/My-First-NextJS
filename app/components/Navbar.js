"use client";
import Link from 'next/link';
import React from 'react';
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

export default function Navbar() {
  const { user, isAuthenticated } = useKindeAuth();
  console.log(user)
  return (
    <section className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="font-bold text-xl">
        <Link href="/">MyBlog</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </div>

      <div>
        {isAuthenticated ? (
          <LogoutLink className="hover:underline">Logout</LogoutLink>
        ) : (
          <LoginLink className="hover:underline">Login</LoginLink>
        )}
      </div>
    </section>
  );
}
