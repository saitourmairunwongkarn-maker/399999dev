'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section
      id="contact" // ✅ ให้ Navbar เลื่อนลงมาเจอได้
      className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-20 text-center text-white dark:from-indigo-900 dark:to-purple-950"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
          พร้อมจะเริ่มต้นกับเราแล้วหรือยัง?
        </h2>
        <p className="mb-8 text-lg text-indigo-100 dark:text-indigo-300">
          สร้างเว็บไซต์ที่ทรงพลังและสวยงามได้ง่าย ๆ ด้วยเครื่องมือของเรา
        </p>

        <Link href="/signup" aria-label="เริ่มต้นใช้งานกับเรา">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 shadow-lg transition hover:bg-gray-100 dark:text-indigo-600"
          >
            เริ่มต้นใช้งาน
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}
