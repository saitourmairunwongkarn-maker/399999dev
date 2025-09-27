'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-error">เกิดข้อผิดพลาด!</h1>
      <p className="mt-4 text-gray-600">ไม่สามารถโหลดข้อมูลได้</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-error px-4 py-2 text-white shadow-soft hover:opacity-90"
      >
        ลองใหม่
      </button>
    </div>
  )
}