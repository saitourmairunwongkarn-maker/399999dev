export const metadata = {
  title: 'Admin Dashboard - Devbaanban',
  description: 'Manage the application and users',
}

export default function AdminLayout({ children }) {
  return <div className="container mx-auto p-8">{children}</div>
}