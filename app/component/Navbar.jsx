export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">MyApp</h1>
      <ul className="flex gap-4">
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#service" className="hover:underline">Services</a></li>
        <li><a href="#review" className="hover:underline">Reviews</a></li>
        <li><a href="#footer" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  )
}