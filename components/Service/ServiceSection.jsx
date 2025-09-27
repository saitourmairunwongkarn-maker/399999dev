"use client";

import { motion } from "framer-motion";
import services from "./Service";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-14 text-center text-gray-900 dark:text-white"
        >
          บริการของเรา
        </motion.h2>

        {/* Services Grid */}
        {services?.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            ไม่มีบริการที่จะแสดงในขณะนี้
          </p>
        )}
      </div>
    </section>
  );
}