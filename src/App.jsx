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
import IdeasTab from './pages/IdeasTab';
import PostsTab from './pages/PostsTab';
import NewProject from './pages/NewProject';
import Onboarding from './pages/Onboarding';
import OnboardingGate from './routes/OnboardingGate';
import ProjectTab from './pages/ProjectsTab';


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
      <Route path="/onboarding" element={<Onboarding />} />

      <Route path="/dashboard" element={<ProtectedRoute><OnboardingGate><DashboardLayout /></OnboardingGate></ProtectedRoute>}>
        <Route path="posts" element={<ProtectedRoute><PostsTab /></ProtectedRoute>} />
        <Route path="Projects" element={<ProtectedRoute><ProjectTab /></ProtectedRoute>} />
        <Route path="ideas" element={<ProtectedRoute><IdeasTab /></ProtectedRoute>} />
      </Route>

      <Route path='/new-project' element={<ProtectedRoute> <NewProject/> </ProtectedRoute>}/>
      {/* 404 Page */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </LoadingProvider>
  );
}


export default App
