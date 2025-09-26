export default function Service() {
  const services = [
    {
      icon: "📒",
      title: "Diary UI Templates",
      desc: "Ready-to-use design templates for faster development."
    },
    {
      icon: "💼",
      title: "Business Solutions",
      desc: "Tools and components tailored for startups and companies."
    },
    {
      icon: "🎨",
      title: "Custom Themes",
      desc: "Easily customizable themes to match your brand."
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      desc: "Optimized UI components for smooth user experience."
    }
  ]

  return (
    <section id="service" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-gray-800">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 text-center bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}