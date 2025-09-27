import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(req) {
  const res = NextResponse.next()

  // ✅ สร้าง Supabase client ฝั่ง server
  const supabase = createServerClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_ANON_KEY,
    getRequestHeader: (key) => req.headers.get(key),
    getCookie: (name) => req.cookies.get(name)?.value,
    setCookie: (name, value, options) => {
      res.cookies.set({
        name,
        value,
        ...options,
      })
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = req.nextUrl.pathname

  // 🚫 ถ้าไม่ได้ login → redirect ไป /login
  if (!user && (pathname.startsWith('/user') || pathname.startsWith('/admin'))) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // 🚫 ถ้า login แล้วแต่ไม่ใช่ admin → ห้ามเข้า /admin
  if (user && pathname.startsWith('/admin') && user.user_metadata.role !== 'admin') {
    return NextResponse.redirect(new URL('/user', req.url))
  }

  return res
}

// ✅ บังคับตรวจเฉพาะบาง path
export const config = {
  matcher: ['/user/:path*', '/admin/:path*'],
}