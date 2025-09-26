"use client"

import { useEffect, useState } from "react"

export default function Announcement() {
  const [message, setMessage] = useState("")
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    async function fetchAnnouncement() {
      try {
        const res = await fetch("/api/announcement")
        if (!res.ok) throw new Error("Failed to fetch announcement")
        const data = await res.json()
        setMessage(data.message)
      } catch (error) {
        console.error(error)
        // fallback message
        setMessage("🚀 Welcome to MyApp! Business Diary Template is live.")
      }
    }
    fetchAnnouncement()
  }, [])

  if (!visible || !message) return null

  return (
    <div className="bg-blue-600 text-white text-center py-2 px-4 flex items-center justify-between">
      <p className="text-sm">{message}</p>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-xs font-semibold hover:underline"
      >
        ปิด
      </button>
    </div>
  )
}