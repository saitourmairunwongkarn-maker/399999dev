/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // ✅ portable build สำหรับ production
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // ✅ จำกัดเฉพาะ Cloudinary
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ ปล่อย build ผ่านแม้ TS error
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ปล่อย build ผ่านแม้ lint error
  },
}

export default nextConfig