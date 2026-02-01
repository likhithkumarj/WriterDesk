import React from 'react'
import { Link } from "react-router-dom";
import '../style/Notfound.css'

function NotFound() {
  return (
    <div className='notfound'>
    <h1>404 😢</h1>
    <p>Page not found, maga</p>
    <Link to="/" className="home-btn">Go Home</Link>
    </div>

  )
}

export default NotFound     