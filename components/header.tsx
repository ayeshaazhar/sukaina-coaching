"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <header className="relative z-50 flex items-center justify-between px-4 py-6 md:px-8 lg:px-12 transition-all duration-300">
      <div className="flex flex-col items-start">
        <span className="font-serif text-3xl font-bold text-[#2C3E50] transition-colors duration-300 hover:text-[#28A745]">
          Sukaina Pasha
        </span>
        <span className="text-sm text-[#2C3E50] tracking-wide italic opacity-80">Transformational Coaching</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#2C3E50]">
        <Link href="/" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          Home
        </Link>
        <Link href="/about" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          About Me
        </Link>
        <Link href="/services" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          Coaching Services
        </Link>
        <Link href="/testimonials" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          Testimonials
        </Link>
        <Link href="/blog" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          Blog
        </Link>
        <Link href="/contact" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          Contact
        </Link>
        <Link href="/wheel-of-life" className="hover:text-[#28A745] transition-colors duration-300" prefetch={false}>
          Life Assessment
        </Link>
        {/* More dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-1 hover:text-[#28A745] transition-colors duration-300"
          >
            <span>More</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
              <Link
                href="/faq"
                className="block px-4 py-2 text-sm hover:bg-[#E0F2F7] hover:text-[#28A745] transition-colors duration-200"
                prefetch={false}
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                className="block px-4 py-2 text-sm hover:bg-[#E0F2F7] hover:text-[#28A745] transition-colors duration-200"
                prefetch={false}
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="block px-4 py-2 text-sm hover:bg-[#E0F2F7] hover:text-[#28A745] transition-colors duration-200"
                prefetch={false}
              >
                Privacy Policy
              </Link>
            </div>
          )}
        </div>

        <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          BOOK A CALL
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden p-2 rounded-lg hover:bg-[#E0F2F7] transition-colors duration-300"
      >
        {isMenuOpen ? <X className="w-6 h-6 text-[#2C3E50]" /> : <Menu className="w-6 h-6 text-[#2C3E50]" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden animate-in slide-in-from-top-2 duration-300">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              About Me
            </Link>
            <Link
              href="/services"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              Coaching Services
            </Link>
            <Link
              href="/testimonials"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              Testimonials
            </Link>
            <Link
              href="/blog"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="/wheel-of-life"
              className="text-[#2C3E50] hover:text-[#28A745] transition-colors duration-300 py-2"
              prefetch={false}
            >
              Life Assessment
            </Link>
            <Button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 mt-4">
              BOOK A CALL
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
