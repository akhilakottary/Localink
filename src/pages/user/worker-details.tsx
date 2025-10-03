import React from 'react';
import { useParams } from 'react-router-dom';
import './worker-details.css';
import BackButton from '../../common-components/back-button';
import { dummyWorkers } from '../user/user-dashboard';

const WorkDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const worker = dummyWorkers.find(w => w.id === Number(id));

  if (!worker) {
    return <div className="error-message">Worker not found</div>;
  }

  return (
    <div className="work-details-container">
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

      {/* Back Button and Header */}
      <div className="header-section">
        <BackButton navigateTo="/user-dashboard" color="#fff" />
        <h1 className="page-title">WorkerDetails</h1>
      </div>

      {/* Worker Details Card */}
      <div className="worker-details-card">
        <div className="worker-profile-section">
          <img 
            src={worker.profilePhoto} 
            alt={`${worker.name}'s profile`} 
            className="worker-profile-photo"
          />
          <h1 className="worker-name">{worker.name}</h1>
        </div>

        <div className="worker-info-section">
          <div className="info-item">
            <span className="info-label">Service:</span>
            <span className="info-value">{worker.service}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Price:</span>
            <span className="info-value">{worker.price}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Distance:</span>
            <span className="info-value">{worker.distance}</span>
          </div>

          <div className="info-item">
            <span className="info-label">Contact:</span>
            <span className="info-value">{worker.contact}</span>
          </div>

          <div className="info-item description-item">
            <span className="info-label">Description:</span>
            <p className="info-description">{worker.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;