'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, Building2 } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'หน้าแรก' },
  { href: '/#features', label: 'จุดเด่น' },
  { href: '/#services', label: 'บริการ' },
  { href: '/#reviews', label: 'รีวิว' },
  { href: '/#contact', label: 'ติดต่อ' }, // ✅ CTA section
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b bg-base-100/80 shadow-soft backdrop-blur-md dark:bg-neutral/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          <Building2 className="h-6 w-6" />
          <span>MyApp</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 transition-all duration-200 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="btn btn-primary btn-sm rounded-lg shadow-soft"
          >
            เริ่มต้นเลย
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 transition-colors hover:text-primary dark:text-gray-200 dark:hover:text-primary md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t bg-base-100 shadow-md dark:bg-neutral md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg text-gray-700 transition-all duration-200 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary btn-sm rounded-lg shadow-soft"
                >
                  เริ่มต้นเลย
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
