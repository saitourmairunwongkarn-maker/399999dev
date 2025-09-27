'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react'

const sectionVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-20 border-t border-base-300 bg-base-200 text-base-content dark:bg-gray-950 dark:text-gray-300"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-primary">MyApp</h2>
          <p className="mt-2 text-sm text-base-content/70 dark:text-gray-400">
            โซลูชันที่ช่วยจัดการธุรกิจให้ง่ายขึ้น พร้อมประสิทธิภาพสูงสุด
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="mb-3 font-semibold">เมนู</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#services" className="link-hover link">
                บริการ
              </Link>
            </li>
            <li>
              <Link href="#reviews" className="link-hover link">
                รีวิว
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="link-hover link">
                แพ็กเกจ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="link-hover link">
                ติดต่อ
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Resources */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="mb-3 font-semibold">ทรัพยากร</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/docs" className="link-hover link">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/blog" className="link-hover link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link-hover link">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="link-hover link">
                Support
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="mb-3 font-semibold">ติดต่อเรา</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> support@myapp.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> 02-123-4567
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-4 flex gap-4">
            {[
              { icon: Facebook, href: '#', label: 'Facebook' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                whileHover={{ scale: 1.15 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300 py-6 text-center text-xs text-base-content/60 dark:border-gray-700">
        © {new Date().getFullYear()} MyApp. สงวนลิขสิทธิ์
      </div>
    </footer>
  )
}
