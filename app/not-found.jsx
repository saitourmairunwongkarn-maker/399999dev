export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        ขอโทษครับ ไม่พบหน้าที่คุณต้องการ
      </p>
      <a
        href="/"
        className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 text-white shadow-soft hover:opacity-90"
      >
        กลับหน้าหลัก
      </a>
    </div>
  )
}