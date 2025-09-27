import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Devbaanban - Modern Business Web App',
  description:
    'Landing page created with Next.js, TailwindCSS, DaisyUI, and Supabase Auth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        {/* 🔝 Header / Navbar */}
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
          <Navbar />
        </header>

        {/* 📄 Main content */}
        <main className="flex-1 container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* 🔻 Footer */}
        <footer className="border-t bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
          <Footer />
        </footer>
      </body>
    </html>
  )
}