'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ReviewSection() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/data/review.json')
        if (!res.ok) throw new Error('Failed to load reviews')
        const data = await res.json()
        setReviews(data.reviews || [])
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  return (
    <section
      id="reviews" // ✅ ทำให้ Navbar ลิงก์มาที่นี่ได้
      className="bg-gray-50 px-6 py-20 transition-colors duration-300 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl"
        >
          เสียงจากผู้ใช้งาน
        </motion.h2>

        {/* กำลังโหลด */}
        {loading && (
          <p className="text-gray-500 dark:text-gray-400">กำลังโหลดรีวิว...</p>
        )}

        {/* ไม่มีรีวิว */}
        {!loading && reviews.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">
            ยังไม่มีรีวิวในขณะนี้
          </p>
        )}

        {/* Grid ของรีวิว */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl dark:bg-gray-800"
            >
              <div className="mb-4 flex items-center gap-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                “{review.comment}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
