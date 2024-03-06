import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 item-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="relative inline-flex items-center justify-items-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus-outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          ></button>
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-1  px-0 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto mx-3"
              src="../react-2.png"
              alt="react"
            ></img>
            <img className="h-8 w-auto" src="../mark.svg" alt="Tailwindcss" />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="hover:bg-black/30 text-white rounded-md px-5 py-5 text-sm font-medium"
                aria-current="page"
              >
                Home Page
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-black/30 hover:text-white rounded-md px-5 py-5 text-sm font-medium"
              >
                Contact Page
              </Link>
              <Link
                to="project"
                className="text-gray-300 hover:bg-black/30 hover:text-white rounded-md px-5 py-5 text-sm font-medium"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
