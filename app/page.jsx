import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ServiceSection from '@/components/Service/ServiceSection'
import ReviewSection from '@/components/Review/ReviewSection'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* 🦸 Hero Section */}
      <section>
        <Hero />
      </section>

      {/* ⚡ Features Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
      </section>

      {/* 🛠️ Service Section */}
      <section className="bg-gray-50 py-12 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection />
        </div>
      </section>

      {/* 💬 Review Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewSection />
      </section>

      {/* 🎯 Call To Action */}
      <section className="bg-blue-600 py-16 text-white dark:bg-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTA />
        </div>
      </section>
    </div>
  )
}