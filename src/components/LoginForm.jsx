import React from 'react'
import { signUp } from '../services/authService';

function LoginForm() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    await signUp(email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>Login</h1>

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Password</label>
      <input type="password" name="password" required />

      <button type="submit">Submit</button>
    </form>
  );
}


export default LoginForm