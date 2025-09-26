/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,   // ตรวจจับปัญหา React ตอน Dev
  swcMinify: true,         // เปิด Minify ด้วย SWC ให้ build เร็วขึ้น

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ปล่อยทุก domain (ควรระบุ domain จริงใน Production)
      },
    ],
    formats: ["image/avif", "image/webp"], // ใช้ฟอร์แมตรูปที่เบาและคม
  },

  experimental: {
    appDir: true,          // ใช้ App Router (Next.js 13+)
  },

  typescript: {
    ignoreBuildErrors: false, // บังคับแก้ Error TS ก่อน build
  },

  eslint: {
    ignoreDuringBuilds: false, // บังคับแก้ Error ESLint ก่อน build
  },
}

module.exports = nextConfig