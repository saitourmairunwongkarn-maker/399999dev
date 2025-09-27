"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ReviewSection() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/data/review.json")
        if (!res.ok) throw new Error("Failed to load reviews")
        const data = await res.json()
        setReviews(data.reviews || [])
      } catch (error) {
        console.error(error)
      }
    }
    fetchReviews()
  }, [])

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-900 dark:text-white"
        >
          เสียงจากผู้ใช้งาน
        </motion.h2>

        {/* Grid ของรีวิว */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                “{review.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}