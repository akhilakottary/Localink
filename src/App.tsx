import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/user/landing';
import UserDashboard from './pages/user/user-dashboard'; // New import
import WorkerDetail from './pages/user/worker-details'; // New import
	
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/worker/:id" element={<WorkerDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

