import Link from 'next/link';
import { useState } from 'react';
import NavLink from './nav-link';

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="bg-gray-800 mb-10">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img className="block h-8 w-auto cursor-pointer" src="/ilkkap-logo-white-mark.png" alt="Ilkkap" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink mobile={false} href="/" text="Home"></NavLink>
                <NavLink mobile={false} href="/bio" text="Bio"></NavLink>
                <NavLink mobile={false} href="/reviews" text="Reviews & Articles"></NavLink>
                <NavLink mobile={false} href="/contact" text="Contact"></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showMobileNav && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink mobile href="/" text="Home"></NavLink>
            <NavLink mobile href="/bio" text="Bio"></NavLink>
            <NavLink mobile href="/reviews" text="Reviews & Articles"></NavLink>
            <NavLink mobile href="/contact" text="Contact"></NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
