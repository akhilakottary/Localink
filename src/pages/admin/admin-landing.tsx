import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin-landing.css';
import Button from '../../common-components/button';
import BackButton from '../../common-components/back-button';
import AnimatedBackground from '../../common-components/animated-background';

const AdminLanding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-landing-container">
      <AnimatedBackground />

      {/* Back Button */}
      <div className="back-button-wrapper">
        <BackButton navigateTo="/user-dashboard" color="#fff" />
      </div>

      {/* Header at Top */}
      <div className="admin-landing-header-wrapper">
        <h1 className="admin-landing-header">Login</h1>
      </div>

      {/* Button in Center */}
      <div className="admin-landing-content">
        <Button onClick={() => navigate('/admin-login')} className="login-button">
          Admin Login
        </Button>
      </div>
    </div>
  );
};

export default AdminLanding;