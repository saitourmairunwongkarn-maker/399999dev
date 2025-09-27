// app/components/service/Service.jsx

/**
 * 🎯 Service Data
 * ใช้ใน ServiceSection / ServiceCard
 * สามารถ scale และรองรับ i18n ได้ง่าย
 */

const services = [
  {
    id: 1,
    image: '/Service/service1.webp',
    title: 'เทมเพลตไดอารี่',
    titleEn: 'Diary Templates',
    desc: 'เทมเพลตพร้อมใช้สำหรับการพัฒนาเว็บอย่างรวดเร็ว',
    descEn: 'Ready-to-use templates for fast web development.',
    link: '/services/diary-templates',
    icon: '📒',
  },
  {
    id: 2,
    image: '/Service/service2.webp',
    title: 'โซลูชันธุรกิจ',
    titleEn: 'Business Solutions',
    desc: 'เครื่องมือและคอมโพเนนต์สำหรับ Startup และบริษัท',
    descEn: 'Tools and components for startups and enterprises.',
    link: '/services/business-solutions',
    icon: '💼',
  },
  {
    id: 3,
    image: '/Service/service3.webp',
    title: 'ธีมปรับแต่งได้',
    titleEn: 'Customizable Themes',
    desc: 'ปรับแต่งได้ง่ายให้ตรงกับแบรนด์ของคุณ',
    descEn: 'Easily customizable to match your brand.',
    link: '/services/custom-themes',
    icon: '🎨',
  },
  {
    id: 4,
    image: '/Service/service4.webp',
    title: 'ประสิทธิภาพสูง',
    titleEn: 'High Performance',
    desc: 'คอมโพเนนต์ UI ที่ถูกปรับแต่งให้โหลดไว ใช้งานลื่น',
    descEn: 'Optimized UI components for fast, smooth performance.',
    link: '/services/high-performance',
    icon: '⚡',
  },
  {
    id: 5,
    image: '/Service/service5.webp',
    title: 'ระบบคลาวด์',
    titleEn: 'Cloud Solutions',
    desc: 'เก็บข้อมูลและจัดการได้อย่างปลอดภัยและยืดหยุ่น',
    descEn: 'Secure and scalable cloud data solutions.',
    link: '/services/cloud-solutions',
    icon: '☁️',
  },
  {
    id: 6,
    image: '/Service/service6.webp',
    title: 'การสนับสนุนลูกค้า',
    titleEn: 'Customer Support',
    desc: 'ทีมงานพร้อมช่วยเหลือตลอด 24/7',
    descEn: 'Dedicated 24/7 support team ready to assist.',
    link: '/services/customer-support',
    icon: '🤝',
  },
  {
    id: 7,
    image: '/Service/service7.webp',
    title: 'การผสาน API',
    titleEn: 'API Integration',
    desc: 'รองรับการเชื่อมต่อกับแพลตฟอร์มยอดนิยม',
    descEn: 'Seamless integration with popular platforms.',
    link: '/services/api-integration',
    icon: '🔗',
  },
  {
    id: 8,
    image: '/Service/service8.webp',
    title: 'ระบบความปลอดภัย',
    titleEn: 'Security Systems',
    desc: 'ปกป้องข้อมูลของคุณด้วยมาตรการความปลอดภัยขั้นสูง',
    descEn: 'Protect your data with advanced security measures.',
    link: '/services/security',
    icon: '🔒',
  },
  {
    id: 9,
    image: '/Service/service9.webp',
    title: 'การวิเคราะห์ข้อมูล',
    titleEn: 'Data Analytics',
    desc: 'เครื่องมือช่วยตัดสินใจด้วยข้อมูลที่แม่นยำ',
    descEn: 'Data-driven insights to support decision making.',
    link: '/services/data-analytics',
    icon: '📊',
  },
  {
    id: 10,
    image: '/Service/service10.webp',
    title: 'การปรับขนาดธุรกิจ',
    titleEn: 'Business Scalability',
    desc: 'เติบโตได้อย่างยืดหยุ่นตามความต้องการ',
    descEn: 'Scale flexibly according to your business needs.',
    link: '/services/scalability',
    icon: '📈',
  },
]

export default services
