import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './user-dasboard.css';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import BackButton from '../../common-components/back-button';

export const dummyWorkers = [
  { id: 1, name: 'John Doe', service: 'Plumber', price: '₹200/hr', profilePhoto: '/images/john-doe.jpg', contact: '123-456-7890', distance: '2km', description: 'Experienced plumber for all home repairs.' },
  { id: 2, name: 'Jane Smith', service: 'Electrician', price: '₹250/hr', profilePhoto: '/images/jane-smith.jpg', contact: '987-654-3210', distance: '3km', description: 'Certified electrician for wiring and installations.' },
  { id: 3, name: 'Bob Johnson', service: 'Mason', price: '₹450/hr', profilePhoto: '/images/bob-johnson.jpg', contact: '555-123-4567', distance: '1km', description: 'Skilled mason for construction and brickwork.' },
];

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWorkers = dummyWorkers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    worker.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
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

      <header className="dashboard-header">
        <BackButton navigateTo="/" color="#fff" />
        <h1>Dashboard</h1>
        <Button
          type="primary"
          onClick={() => navigate('/admin-landing')}
          className="add-button"
        >
          Add
        </Button>
      </header>

      <Input
        placeholder="Search workers or services..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        prefix={<SearchOutlined />}
      />

      <div className="worker-list">
        {filteredWorkers.length > 0 ? (
          filteredWorkers.map(worker => (
            <div key={worker.id} className="worker-card" onClick={() => navigate(`/worker/${worker.id}`)}>
              <img src={worker.profilePhoto} alt={`${worker.name}'s profile`} className="profile-photo" />
              <div className="worker-info">
                <h3>{worker.name}</h3>
                <p>Service: {worker.service}</p>
                <p>Price: {worker.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No workers found near you.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;