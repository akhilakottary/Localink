import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin-signup.css';
import { Input, Button } from 'antd';
import BackButton from '../../common-components/back-button';

const AdminSignup: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    // Add login logic here (e.g., API call or validation)
    console.log('Login attempted with:', { phone, password });
    navigate('/worker-details'); // Navigate to worker details page after login (adjust as needed)
  };

  return (
    <div className="admin-login-container">
      <header className="login-header">
        <BackButton navigateTo="/" color="#fff" />
      </header>
      <div className="login-card">
        <h1 className="login-title">Sign up</h1>
        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="login-input"
          type="tel"
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <Button
          type="primary"
          onClick={handleContinue}
          className="continue-button"
        >
          Continue
        </Button>
        <div className="login-link">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="login-text">
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;