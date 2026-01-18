import React from 'react'
import LoginForm from '../components/LoginForm'
import { signInWithGoogle } from '../services/authService'

function Login() {
  return (
    <>
    <LoginForm/>
    <button onClick={signInWithGoogle} >Login with Google</button>
    <div>I have an Acc. <a href='/signin'>Sign In</a></div>
    </>
  )
}


export default Login