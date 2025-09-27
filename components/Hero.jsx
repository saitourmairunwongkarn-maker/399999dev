'use client'

import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white dark:from-indigo-900 dark:via-purple-900 dark:to-black"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
        {/* Left Content */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs shadow-md backdrop-blur-md sm:text-sm">
            ✨ New Release v1.0
          </span>

          <h1
            id="hero-title"
            className="text-3xl font-extrabold leading-snug sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Build Smarter with <br />
            <span className="text-yellow-300 drop-shadow-md">
              devbaanban 🚀
            </span>
          </h1>

          <p className="mx-auto max-w-md text-base text-gray-100 sm:max-w-lg sm:text-lg md:max-w-xl md:text-xl lg:mx-0">
            Your ultimate business diary template solution — plan, track and
            grow your projects with style.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/get-started"
              className="btn btn-lg flex w-full items-center justify-center gap-2 border-0 bg-white text-blue-700 shadow-lg hover:bg-gray-100 focus:ring-2 focus:ring-yellow-300 sm:w-auto"
              aria-label="Get started with devbaanban"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/learn-more"
              className="btn btn-outline btn-lg flex w-full items-center justify-center gap-2 border-white text-white hover:bg-white/20 focus:ring-2 focus:ring-purple-400 sm:w-auto"
              aria-label="Learn more about devbaanban"
            >
              <PlayCircle className="h-5 w-5" /> Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="relative order-first sm:order-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="rounded-2xl bg-white/10 p-4 shadow-2xl backdrop-blur-lg sm:rounded-3xl sm:p-6">
            <Image
              src="/hero-mockup.png"
              alt="Preview of devbaanban business diary app interface"
              width={600}
              height={500}
              priority
              className="mx-auto max-h-[320px] w-auto rounded-xl shadow-xl sm:max-h-[400px] md:max-h-[480px] lg:max-h-[520px]"
            />
          </div>

          {/* Glow Orbs */}
          <motion.div
            className="absolute -left-6 -top-8 h-20 w-20 rounded-full bg-yellow-400 opacity-40 blur-2xl sm:h-28 sm:w-28 sm:blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.div
            className="absolute -bottom-8 -right-6 h-28 w-28 rounded-full bg-pink-500 opacity-30 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </motion.div>
      </div>

      {/* Social Proof Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 pb-12 text-center sm:px-6 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-200 sm:text-sm">
          Trusted by teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-80 sm:gap-8">
          <Image src="/logos/google.svg" alt="Google" width={90} height={30} />
          <Image src="/logos/amazon.svg" alt="Amazon" width={90} height={30} />
          <Image
            src="/logos/microsoft.svg"
            alt="Microsoft"
            width={90}
            height={30}
          />
          <Image
            src="/logos/spotify.svg"
            alt="Spotify"
            width={90}
            height={30}
          />
        </div>
      </motion.div>
    </section>
  )
}
