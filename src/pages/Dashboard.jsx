import React from 'react'
import { signOut } from '../services/authService'

function Dashboard() {

  async function handleSubmit(e) {
    e.preventDefault();
    await signOut();
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>Username:</p>
      <button onClick={handleSubmit}>Logout</button>
    </>
  )
}

export default Dashboard