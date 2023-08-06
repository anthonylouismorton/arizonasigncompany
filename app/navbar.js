"use client"
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-90 h-16 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href='/'>
              <img className="h-8 w-8" src="/azsigns.jpg" alt="Logo" />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/Signs">
                    Signs
                </Link>
                <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/Installation">
                    Installation
                </Link>
                <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/CraneService">
                    Crane Service
                </Link>
                <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium" href="/Contact">
                    Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:hidden bg-gray-800 w-full`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-w-screen">
              <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium block w-full" href="/Signs">
                Signs
              </Link>
              <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium block w-full" href="/Installation">
                Installation
              </Link>
              <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium block w-full" href="/Crane-service">
                Crane Service
              </Link>
              <Link className="text-yellow-400 hover:bg-yellow-400 hover:text-black px-3 py-2 rounded-md text-sm font-medium block w-full" href="/Contact">
                Contact
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
