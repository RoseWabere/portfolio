'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-surface transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-text transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-text transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-text transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-surface z-50 p-6"
          >
            <nav className="flex flex-col gap-6">
              <Link 
                href="/#experience" 
                onClick={toggleMenu}
                className="text-lg font-medium text-text hover:text-primary-500 transition-colors"
              >
                Experience
              </Link>
              <Link 
                href="/#education" 
                onClick={toggleMenu}
                className="text-lg font-medium text-text hover:text-primary-500 transition-colors"
              >
                Education
              </Link>
              <Link 
                href="/#systems" 
                onClick={toggleMenu}
                className="text-lg font-medium text-text hover:text-primary-500 transition-colors"
              >
                Systems
              </Link>
              <Link 
                href="/#blog" 
                onClick={toggleMenu}
                className="text-lg font-medium text-text hover:text-primary-500 transition-colors"
              >
                Blog
              </Link>
              <Link 
                href="/#contact" 
                onClick={toggleMenu}
                className="text-lg font-medium text-text hover:text-primary-500 transition-colors"
              >
                Contact
              </Link>
              
              {/* WhatsApp in mobile menu */}
              <a
                href="https://wa.me/254708486104?text=Hi%20Rose%2C%20I%20came%20across%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
