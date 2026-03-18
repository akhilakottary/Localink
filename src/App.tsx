import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import './App.css';
import LandingPage from './pages/user/landing';
import UserDashboard from './pages/user/user-dashboard';
import WorkerDetail from './pages/user/worker-details';
import AdminSignup from './pages/admin/admin-signup';
import AdminLogin from './pages/admin/admin-login';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#001F3F',
          borderRadius: 20,
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        },
        components: {
          Button: {
            controlHeight: 40,
            paddingContentHorizontal: 24,
            fontWeight: 500,
          },
        },
      }}
    >
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/worker/:id" element={<WorkerDetail />} />
            <Route path="/admin-signup" element={<AdminSignup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;

