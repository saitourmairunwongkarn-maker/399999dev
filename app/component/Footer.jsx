export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-600 text-white py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-lg font-bold">MyApp</h2>

        <div className="text-sm">Services • Reviews • Contact</div>

        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}