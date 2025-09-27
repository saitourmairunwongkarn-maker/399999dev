import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ✅ บังคับใช้ Node.js runtime
export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // ต้องใช้ service role
)

export async function POST(req) {
  try {
    const { uid, role } = await req.json()
    if (!uid || !role) {
      return NextResponse.json(
        { error: 'uid and role are required' },
        { status: 400 }
      )
    }

    const { error } = await supabase.auth.admin.updateUserById(uid, {
      user_metadata: { role },
    })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json(
      { error: err.message || 'Failed to update role' },
      { status: 500 }
    )
  }
}