export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Welcome to MyApp 🚀
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Your business diary template solution to build faster and smarter.
      </p>
      <a
        href="#service"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
      >
        Get Started
      </a>
    </section>
  )
}