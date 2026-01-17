import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Scripts from './pages/Scripts'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path='/project/:id' element={<Projects />} />
      <Route path='/script/:id' element={<Scripts />} />
      <Route path='/dashboard' element={<Dashboard />} />

      {/* 404 Page */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}


export default App
