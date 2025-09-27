export default function Review() {
  const reviews = [
    {
      text: "เทมเพลตนี้ช่วยให้ Startup ของเราพร้อมใช้งานในเวลาอันสั้น!",
      author: "ผู้ใช้งานจริง",
    },
    {
      text: "ดีไซน์สะอาดและปรับแต่งได้ง่ายมาก",
      author: "เจ้าของธุรกิจ",
    },
    {
      text: "โซลูชันที่ดีที่สุดสำหรับสร้าง Diary App ธุรกิจ",
      author: "ทีมพัฒนา",
    },
  ];

  return (
    <section id="reviews" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-gray-800">
          รีวิวจากลูกค้า
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <blockquote
              key={index}
              className="p-6 border-l-4 border-blue-600 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <p className="text-gray-700 italic">“{review.text}”</p>
              <footer className="mt-4 text-sm font-medium text-gray-500">
                — {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}