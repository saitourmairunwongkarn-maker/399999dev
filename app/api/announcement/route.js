// app/api/announcement/route.js
import { NextResponse } from 'next/server'
import announcements from '@/data/announcements.json'

export async function GET() {
  try {
    // ✅ ตรวจสอบว่าเป็น array จริง
    if (!Array.isArray(announcements)) {
      throw new Error('Invalid announcements format')
    }

    return NextResponse.json(
      { success: true, data: announcements },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Announcement API error:', error)
    return NextResponse.json(
      {
        success: false,
        messages: ['ไม่สามารถโหลดประกาศได้ กรุณาลองใหม่อีกครั้ง'],
      },
      { status: 500 }
    )
  }
}
