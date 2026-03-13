import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/user/landing';
import UserDashboard from './pages/user/user-dashboard'; // New import
import WorkerDetail from './pages/user/worker-details'; // New import
import AdminSignup from './pages/admin/admin-signup'; // New import
import AdminLogin from './pages/admin/admin-login'; // New import
import AdminDashboard from './pages/admin/admin-dashboard'; // New import
import CreateService from './pages/admin/create-service'; // New import
import AdminLanding from './pages/admin/admin-landing'; // New import

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/worker/:id" element={<WorkerDetail />} />
          <Route path="/admin-signup" element={<AdminSignup />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/admin-landing" element={<AdminLanding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

