import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// ✅ บังคับใช้ Node.js runtime
export const runtime = 'nodejs'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // ใช้ service role key
)

export async function GET() {
  try {
    const { data, error } = await supabase.auth.admin.listUsers()
    if (error) throw error

    return NextResponse.json({ users: data.users })
  } catch (err) {
    return NextResponse.json(
      { error: err.message || 'Failed to list users' },
      { status: 500 }
    )
  }
}