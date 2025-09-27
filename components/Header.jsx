'use client'

import Navbar from './Navbar'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="relative">
      {/* Top Announcement bar (optional) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-indigo-600 px-4 py-2 text-center text-sm text-white"
      >
        🚀 Welcome to devbaanban — Your business diary solution
      </motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Gradient Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70" />
    </header>
  )
}
