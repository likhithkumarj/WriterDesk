import React from 'react'
import { signIn } from '../services/authService';

function Signin() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn(email, password);
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="form">
      <h1>Signin</h1>

      <label>Email</label>
      <input type="email" name="email" required />

      <label>Password</label>
      <input type="password" name="password" required />

      <button type="submit">Submit</button>
    </form>
      <a href="/">home</a>
    </>
  );
}


export default Signin