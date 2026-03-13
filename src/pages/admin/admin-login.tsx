import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin-login.css';
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Button from '../../common-components/button';
import BackButton from '../../common-components/back-button';

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    console.log('Login:', { email, password });
    navigate('/admin-dashboard');
  };

  const handleRegister = () => {
    navigate('/admin-signup');
  };

  return (
    <div className="admin-login-container">
      {/* Background Animation Elements */}
      <div className="background-pattern"></div>
      
      {/* Floating Worker Icons */}
      <div className="worker-icons">
        <div className="worker-icon">🔨</div>
        <div className="worker-icon">🔧</div>
        <div className="worker-icon">🏗️</div>
        <div className="worker-icon">⚡</div>
        <div className="worker-icon">🎨</div>
        <div className="worker-icon">🧰</div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
        <div className="floating-circle"></div>
      </div>

      {/* Connection Lines */}
      <div className="connection-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Back Button */}
      <div className="admin-login-back-button">
        <BackButton navigateTo="/admin-landing" color="#fff" />
      </div>

      {/* Login Card */}
      <div className="admin-login-card">
        <h1 className="login-title">Admin Login</h1>
        
        <div className="login-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <Input
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              prefix={<UserOutlined />}
              size="large"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <Input.Password
              placeholder="Enter your password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              prefix={<LockOutlined />}
              size="large"
            />
          </div>

          <Button onClick={handleLogin} className="login-button">
            Login
          </Button>

          <div className="register-section">
            <p className="register-text">
              Don't have an account?{' '}
              <span className="register-link" onClick={handleRegister}>
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;