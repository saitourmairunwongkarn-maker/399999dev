"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  if (!service) return null; // กัน error เวลา service ไม่มีค่า

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="group flex flex-col justify-between p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
    >
      {/* รูปภาพ */}
      <div className="relative w-full h-40 mb-6 overflow-hidden rounded-xl">
        <Image
          src={service.image}
          alt={service.title || "service"}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* เนื้อหา */}
      <div>
        <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-100">
          {service.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {service.desc}
        </p>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ x: 5 }}
        className="mt-auto inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
      >
        ดูเพิ่มเติม
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </motion.button>
    </motion.div>
  );
}