export default function Review() {
  const reviews = [
    {
      text: 'เทมเพลตนี้ช่วยให้ Startup ของเราพร้อมใช้งานในเวลาอันสั้น!',
      author: 'ผู้ใช้งานจริง',
    },
    {
      text: 'ดีไซน์สะอาดและปรับแต่งได้ง่ายมาก',
      author: 'เจ้าของธุรกิจ',
    },
    {
      text: 'โซลูชันที่ดีที่สุดสำหรับสร้าง Diary App ธุรกิจ',
      author: 'ทีมพัฒนา',
    },
  ]

  return (
    <section id="reviews" className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-2xl font-semibold text-gray-800 md:text-3xl">
          รีวิวจากลูกค้า
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <blockquote
              key={index}
              className="rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow transition duration-200 hover:shadow-lg"
            >
              <p className="italic text-gray-700">“{review.text}”</p>
              <footer className="mt-4 text-sm font-medium text-gray-500">
                — {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
