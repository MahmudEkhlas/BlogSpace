import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer
      className="
                w-full
                bg-[#e5e7eb]
                border-t
                border-t-gray-300

                dark:bg-[#07111F]
                dark:border-t-white/10

                transition-colors duration-300
            "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

        <div className="
                    flex
                    flex-col
                    md:flex-row
                    justify-between
                    items-center
                    gap-4
                    pb-5
                    border-b
                    border-b-gray-300
                    dark:border-b-white/10
                ">

          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 BlogSpace. All rights reserved.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">

            <Link
              to="/"
              className="
                                text-sm
                                text-gray-600
                                hover:text-gray-900
                                dark:text-gray-400
                                dark:hover:text-cyan-400
                                transition-colors duration-200
                            "
            >
              About
            </Link>

            <Link
              to="/"
              className="
                                text-sm
                                text-gray-600
                                hover:text-gray-900
                                dark:text-gray-400
                                dark:hover:text-cyan-400
                                transition-colors duration-200
                            "
            >
              Services
            </Link>

            <Link
              to="/"
              className="
                                text-sm
                                text-gray-600
                                hover:text-gray-900
                                dark:text-gray-400
                                dark:hover:text-cyan-400
                                transition-colors duration-200
                            "
            >
              Contact
            </Link>

            <Link
              to="/"
              className="
                                text-sm
                                text-gray-600
                                hover:text-gray-900
                                dark:text-gray-400
                                dark:hover:text-cyan-400
                                transition-colors duration-200
                            "
            >
              Privacy
            </Link>

            <Link
              to="/"
              className="
                                text-sm
                                text-gray-600
                                hover:text-gray-900
                                dark:text-gray-400
                                dark:hover:text-cyan-400
                                transition-colors duration-200
                            "
            >
              Terms
            </Link>

          </nav>

        </div>

      </div>
    </footer>
  )
}

export default Footer