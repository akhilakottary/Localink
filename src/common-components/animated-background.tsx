import React from 'react';
import './animated-background.css';

const AnimatedBackground: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default AnimatedBackground;
