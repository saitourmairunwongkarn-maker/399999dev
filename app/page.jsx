"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceSection from "@/components/Service/ServiceSection";
import ReviewSection from "@/components/Review/ReviewSection";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <ServiceSection />
      <ReviewSection />
      <CTA />
    </main>
  );
}