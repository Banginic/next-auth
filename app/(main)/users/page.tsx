import React from 'react'
import { ProtectedRoute } from '@/components/index'

function Users() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Users</h1>
      </div>
    </ProtectedRoute>
  )
}

export default Users
