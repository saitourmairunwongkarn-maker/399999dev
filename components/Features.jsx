"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    title: "พัฒนาได้รวดเร็ว",
    desc: "โครงสร้างที่เตรียมไว้ล่วงหน้า ลดเวลาการเริ่มต้นโปรเจกต์",
  },
  {
    id: 2,
    title: "ดีไซน์สวยงาม",
    desc: "คอมโพเนนต์ที่ออกแบบให้ดูทันสมัยและปรับแต่งได้",
  },
  {
    id: 3,
    title: "รองรับ Dark Mode",
    desc: "ประสบการณ์การใช้งานที่เหมาะสมทั้งกลางวันและกลางคืน",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-900 dark:text-white"
        >
          จุดเด่นของเรา
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all text-left"
            >
              <CheckCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}