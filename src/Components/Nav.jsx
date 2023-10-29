import React from 'react'
import { useState } from 'react'

function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav aria-label="Site Navbar">
          <div className="border-b bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-3">
              <div className="flex items-center justify-between gap-x-4">
                <ul className="flex items-center gap-x-3">
                  {/* <li className="hidden sm:block">
                    <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Electroland Ghana Limited</a>
                  </li> */}
                  <li><a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Electroland Ghana Limited</a></li>
                  {/* <li><a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Blogs</a></li> */}
                </ul>
                <ul className="flex items-center gap-x-3">
                  <li>
                    <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer text-gray-900 hover:text-gray-900/70">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="mx-auto max-w-screen-xl px-4 py-4">
              <div className="flex items-center justify-between gap-x-8">
                <a className="flex cursor-pointer items-center gap-x-1">
                  <img width="28" height="28" className="object-cover" src="/homeland.jpg" alt="EGL logo" />
                  <span className="text-lg font-black text-gray-900">EGL</span>
                </a>
                <ul className="flex items-center gap-x-6">
                  <li className="hidden md:block">
                    <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Home</a>
                  </li>
                  <li className="hidden md:block">
                    <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Products</a>
                  </li>
                  <li className="hidden md:block">
                    <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Service</a>
                  </li>
                  {/* <li className="hidden md:block">
                    <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Contact Us</a>
                  </li>
                  <li className="hidden md:block">
                    <a className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">About Us</a>
                  </li> */}
                  <li className="flex items-center gap-x-4 md:hidden">
                    <button
                      onClick={toggleMobileMenu}
                      className="block cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70"
                    >
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={isMobileMenuOpen ? 'h-6 w-6' : 'hidden h-6 w-6'}>
                        <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`duration-900 ${isMobileMenuOpen ? 'h-auto' : 'h-0'} overflow-y-hidden transition-all md:hidden`}>
              <hr />
              <ul className="mx-auto max-w-screen-xl px-4 py-4">
                <li>
                  <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">HOME</a>
                </li>
                <li>
                  <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">PRODUCTS</a>
                </li>
                <li>
                  <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">SERVICE</a>
                </li>
                <li>
                  <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">CONTACT US</a>
                </li>
                <li>
                  <a className="block cursor-pointer rounded-full p-2 text-center text-sm font-medium hover:bg-gray-900 hover:text-gray-50">ABOUT US</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
      
}

export default Nav