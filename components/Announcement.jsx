'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Announcement() {
  const [messages, setMessages] = useState([])
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  // ดึงข้อความจาก API
  useEffect(() => {
    async function fetchAnnouncement() {
      try {
        const res = await fetch('/api/announcement')
        if (!res.ok) throw new Error('Failed to fetch announcement')
        const data = await res.json()
        setMessages(data.messages || [])
      } catch (error) {
        console.error(error)
        setMessages(['🚀 ยินดีต้อนรับสู่ MyApp! เทมเพลตพร้อมใช้งานแล้ว'])
      }
    }
    fetchAnnouncement()
  }, [])

  // Auto rotate ข้อความ
  useEffect(() => {
    if (messages.length > 1) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % messages.length)
      }, 4000) // 4 วินาที
      return () => clearInterval(interval)
    }
  }, [messages])

  if (!visible || messages.length === 0) return null

  return (
    <div className="flex items-center justify-between bg-blue-600 px-4 py-2 text-center text-white">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium"
        >
          {messages[index]}
        </motion.p>
      </AnimatePresence>

      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-xs font-semibold hover:underline"
      >
        ปิด
      </button>
    </div>
  )
}
