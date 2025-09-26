import "./globals.css"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Announcement from "./component/Announcement"

// ✅ Metadata สำหรับ SEO + Social Media
export const metadata = {
  title: "MyApp",
  description: "Business diary template solution",
  metadataBase: new URL("https://myapp.com"), // 👉 เปลี่ยนเป็น domain จริงตอน deploy
  keywords: ["Business", "Diary", "Template", "Next.js", "Tailwind"],
  authors: [{ name: "MyApp Team" }],
  themeColor: "#2563eb",
  openGraph: {
    title: "MyApp",
    description: "Business diary template solution",
    url: "https://myapp.com",
    siteName: "MyApp",
    images: [
      {
        url: "/og-image.png", // 👉 วางไฟล์ใน public/
        width: 1200,
        height: 630,
        alt: "MyApp Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyApp",
    description: "Business diary template solution",
    creator: "@myapp", // 👉 ใส่ handle Twitter ถ้ามี
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen antialiased bg-gray-50 text-gray-900">
        
        {/* 🔔 แบนเนอร์ประกาศ */}
        <Announcement />

        {/* 🚀 Navbar */}
        <Navbar />

        {/* 📄 Main Content */}
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* ⚡ Footer */}
        <Footer />
      </body>
    </html>
  )
}