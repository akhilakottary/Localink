import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin-login.css';
import { Input, Button } from 'antd';
import BackButton from '../../common-components/back-button';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here (e.g., API call or validation)
    console.log('Login attempted with:', { phone, password });
    navigate('/admin-dashboard'); // Navigate to dashboard after login (adjust as needed)
  };

  return (
    <div className="admin-login-container">
      <header className="login-header">
        <BackButton navigateTo="/admin-signup" color="#fff" />
      </header>
      <div className="login-card">
        <h1 className="login-title">Login</h1>
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
          onClick={handleLogin}
          className="continue-button"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;