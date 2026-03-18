import React, { type ReactNode } from 'react';
import AnimatedBackground from './animated-background';
import './main-layout.css';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
  hideBackground?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '', hideBackground = false }) => {
  return (
    <div className={`main-layout-container ${className}`}>
      {!hideBackground && <AnimatedBackground />}
      <div className="main-layout-content">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
