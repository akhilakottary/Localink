import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';
import Button from '../../common-components/button';
import AnimatedBackground from '../../common-components/animated-background';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <AnimatedBackground />

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

