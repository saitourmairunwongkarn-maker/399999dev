export default function Review() {
  const reviews = [
    {
      text: "This template boosted our startup site in no time!",
      author: "Happy User",
    },
    {
      text: "Clean design and very easy to customize.",
      author: "Business Owner",
    },
    {
      text: "The best solution for building business diary apps.",
      author: "Developer Team",
    },
  ]

  return (
    <section id="review" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-gray-800">
          Customer Reviews
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
  )
}