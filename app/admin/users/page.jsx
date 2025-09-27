// ✅ Fetch users ผ่าน API
const fetchUsers = async () => {
  setLoading(true)
  const res = await fetch('/api/admin/list-users')
  const result = await res.json()
  if (result.users) setUsers(result.users)
  setLoading(false)
}

// ✅ Update user role ผ่าน API
const updateRole = async (uid, role) => {
  const res = await fetch('/api/admin/update-role', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: uid, role }),
  })

  const result = await res.json()
  if (result.success) {
    fetchUsers()
  } else {
    alert(result.error || 'Failed to update role')
  }
}