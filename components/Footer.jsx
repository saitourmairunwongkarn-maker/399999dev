"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-16">
      {/* Brand */}
      <motion.aside
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold">MyApp</h2>
        <p className="text-sm text-base-content/70 max-w-xs">
          โซลูชันจัดการธุรกิจที่ออกแบบมาเพื่อความง่ายและมีประสิทธิภาพ
        </p>
      </motion.aside>

      {/* Navigation */}
      <motion.nav
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="footer-title">เมนู</h3>
        <a href="#services" className="link link-hover">บริการ</a>
        <a href="#reviews" className="link link-hover">รีวิว</a>
        <a href="#pricing" className="link link-hover">แพ็กเกจ</a>
        <a href="#contact" className="link link-hover">ติดต่อ</a>
      </motion.nav>

      {/* Resources */}
      <motion.nav
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="footer-title">ทรัพยากร</h3>
        <a href="/docs" className="link link-hover">Documentation</a>
        <a href="/blog" className="link link-hover">Blog</a>
        <a href="/faq" className="link link-hover">FAQ</a>
        <a href="/support" className="link link-hover">Support</a>
      </motion.nav>

      {/* Contact + Socials */}
      <motion.nav
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="footer-title">ติดต่อเรา</h3>
        <p className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4" /> support@myapp.com
        </p>
        <p className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4" /> 02-123-4567
        </p>
        <div className="flex gap-4 mt-3">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-primary"
          >
            <Facebook className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-primary"
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-primary"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="hover:text-primary"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.nav>

      {/* Bottom bar */}
      <motion.div
        className="w-full col-span-4 mt-6 border-t border-base-300 pt-4 text-center text-xs text-base-content/60"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        © {new Date().getFullYear()} MyApp. สงวนลิขสิทธิ์
      </motion.div>
    </footer>
  )
}