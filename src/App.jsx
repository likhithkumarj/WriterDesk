import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import { LoadingProvider } from "./context/LoadingContext";
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'
import Scripts from './pages/Scripts'
import Dashboard from './pages/Dashboard'
import supabase from './libs/supabaseClient'
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from './routes/PublicRoute'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  // supabase.auth.onAuthStateChange((_event, session) => {
  //   console.log("Auth changed:", session);
  // });
  return (
    <LoadingProvider>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signin" element={<PublicRoute><Signin /></PublicRoute>} />
      
      <Route path='/project' element={<ProtectedRoute><Projects /></ProtectedRoute>} />
      <Route path='/script' element={<ProtectedRoute><Scripts /></ProtectedRoute>} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Route>

      {/* 404 Page */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </LoadingProvider>
  );
}


export default App
