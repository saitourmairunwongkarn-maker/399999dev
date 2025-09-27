"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          พร้อมจะเริ่มต้นกับเราแล้วหรือยัง?
        </h2>
        <p className="mb-8 text-lg text-indigo-100">
          สร้างเว็บไซต์ที่ทรงพลังและสวยงามได้ง่าย ๆ ด้วยเครื่องมือของเรา
        </p>
        <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg inline-flex items-center gap-2 hover:bg-gray-100 transition"
          >
            เริ่มต้นใช้งาน
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}