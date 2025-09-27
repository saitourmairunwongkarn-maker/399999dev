'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ service }) {
  if (!service) return null // ป้องกัน error

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-gray-100 bg-base-100 p-6 shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl dark:border-gray-700 dark:bg-neutral"
    >
      {/* รูปภาพ */}
      <div className="relative mb-6 h-40 w-full overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title || 'service'}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* เนื้อหา */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {service.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {service.desc}
        </p>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ x: 5 }}
        className="mt-auto inline-flex items-center gap-2 font-medium text-primary transition-colors group-hover:text-primary/80"
      >
        ดูเพิ่มเติม
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </motion.button>
    </motion.div>
  )
}
