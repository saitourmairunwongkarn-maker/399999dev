'use client'

import { motion } from 'framer-motion'
import services from './Service'
import ServiceCard from './ServiceCard'

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="bg-base-100 px-6 py-20 transition-colors duration-300 dark:bg-neutral"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl"
          >
            บริการของเรา
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base text-gray-600 dark:text-gray-400 md:text-lg"
          >
            เรานำเสนอบริการที่ออกแบบมาเพื่อช่วยให้ธุรกิจของคุณเติบโตอย่างมืออาชีพ
          </motion.p>
        </div>

        {/* Services Grid */}
        {services?.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400">
            ไม่มีบริการที่จะแสดงในขณะนี้
          </p>
        )}
      </div>
    </section>
  )
}
