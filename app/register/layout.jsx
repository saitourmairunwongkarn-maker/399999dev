export const metadata = {
  title: 'User Dashboard - Devbaanban',
  description: 'Welcome to your personal dashboard',
}

export default function UserLayout({ children }) {
  return <div className="container mx-auto p-8">{children}</div>
}