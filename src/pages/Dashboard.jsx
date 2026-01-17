import React from 'react'
import AuthGuard from '../services/AuthGuard'

function Dashboard() {
  return (
    <AuthGuard>
      <h1>Dashboard</h1>
    </AuthGuard>
  )
}

export default Dashboard