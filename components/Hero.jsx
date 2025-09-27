"use client"

import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-block bg-white/20 backdrop-blur-md text-sm px-4 py-1 rounded-full shadow-md">
            ✨ New Release v1.0
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build Smarter with <br />
            <span className="text-yellow-300 drop-shadow-md">devbaanban 🚀</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-100 max-w-xl mx-auto lg:mx-0">
            Your ultimate business diary template solution — plan, track and
            grow your projects with style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <a className="btn btn-lg bg-white text-blue-700 hover:bg-gray-100 border-0 shadow-lg flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
            <a className="btn btn-lg btn-outline border-white text-white hover:bg-white/20 flex items-center gap-2">
              <PlayCircle className="w-5 h-5" /> Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-white/10 rounded-3xl backdrop-blur-lg p-6 shadow-2xl">
            <img
              src="/hero-mockup.png"
              alt="Screenshot of devbaanban app interface"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Glow Orbs */}
          <div className="absolute -top-8 -left-6 w-28 h-28 bg-yellow-400 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-8 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        </motion.div>
      </div>

      {/* Social Proof Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-gray-200 text-sm uppercase tracking-wide mb-4">
          Trusted by teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <img src="/logos/google.svg" alt="Google" className="h-8" />
          <img src="/logos/amazon.svg" alt="Amazon" className="h-8" />
          <img src="/logos/microsoft.svg" alt="Microsoft" className="h-8" />
          <img src="/logos/spotify.svg" alt="Spotify" className="h-8" />
        </div>
      </motion.div>
    </section>
  )
}