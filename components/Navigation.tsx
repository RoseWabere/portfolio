'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ui/ThemeToggle'
import MobileMenu from './ui/MobileMenu'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-surface/100 backdrop-blur-sm shadow-soft border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-bold text-text">
          Rose Wabere
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#experience" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
            Experience
          </Link>
          <Link href="/#education" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
            Education
          </Link>
          <Link href="/#systems" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
            Projects
          </Link>
          <Link href="/#blog" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
            Blog
          </Link>
          <Link href="/#contact" className="text-text-muted hover:text-text transition-colors text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="hidden md:flex px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
            Hire Me
          </a>
          
          {/* WhatsApp - Desktop only */}
          <a
            href="https://wa.me/254708486104?text=Hi%20Rose%2C%20I%20came%20across%20your%20portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </a>

          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
