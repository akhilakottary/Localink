import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';
import Button from '../../common-components/button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
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

      <header className="landing-header">
        <h1>
          <span className="Loca">Loca</span>
          <span className="red-l">l</span>
          <span className="ink">ink</span>
        </h1>
        <p className="tagline">Link Locally, Thrive Easily</p>
      </header>

      <div className="landing-content">
        <Button onClick={() => navigate('/user-dashboard')}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;

