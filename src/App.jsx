import { Route, Routes } from 'react-router-dom'
import { LoadingProvider } from "./context/LoadingContext";
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import supabase from './libs/supabaseClient'
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from './routes/PublicRoute'
import DashboardLayout from './layouts/DashboardLayout'
import Ideas_ProjectsTab from './pages/Ideas_ProjectsTab';
import PostsTab from './pages/PostsTab';
import NewProject from './pages/NewProject';


function App() {
  // supabase.auth.onAuthStateChange((_event, session) => {
  //   console.log("Auth changed:", session);
  // });
  return (
    <LoadingProvider>
    <Routes>
      <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signin" element={<PublicRoute><Signin /></PublicRoute>} />

      <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route path="posts" element={<ProtectedRoute><PostsTab /></ProtectedRoute>} />
        <Route path="ideas" element={<ProtectedRoute><Ideas_ProjectsTab /></ProtectedRoute>} />
      </Route>

      <Route path='/new-project' element={<ProtectedRoute> <NewProject/> </ProtectedRoute>}/>
      {/* 404 Page */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </LoadingProvider>
  );
}


export default App
