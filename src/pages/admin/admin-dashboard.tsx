import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './admin-dashboard.css';
import { Input } from 'antd';
import { SearchOutlined, LogoutOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Button from '../../common-components/button';
import AnimatedBackground from '../../common-components/animated-background';

// Dummy services data
export const dummyServices = [
  { id: 1, name: 'John Doe', service: 'Plumber', price: '₹200/hr', profilePhoto: '/images/john-doe.jpg' },
  { id: 2, name: 'Jane Smith', service: 'Electrician', price: '₹250/hr', profilePhoto: '/images/jane-smith.jpg' },
  { id: 3, name: 'Bob Johnson', service: 'Mason', price: '₹450/hr', profilePhoto: '/images/bob-johnson.jpg' },
];

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = dummyServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  const handleEdit = (id: number) => {
    // Navigate to edit page or open edit modal
    console.log('Edit service:', id);
  };

  const handleDelete = (id: number) => {
    // Add delete logic here
    console.log('Delete service:', id);
  };

  return (
    <div className="admin-dashboard-container">
      <AnimatedBackground />

      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogout}>
        <LogoutOutlined />
      </button>

      <header className="admin-header">
        <h1>Dashboard</h1>
      </header>

      <div className="search-section">
        <Input
          placeholder="Search services..."
          className="admin-search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          prefix={<SearchOutlined />}
        />
      </div>

      <div className="create-section">
        <Button onClick={() => console.log('Create new service')} className="create-button">
          Create
        </Button>
      </div>

      <div className="service-list">
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <img src={service.profilePhoto} alt={`${service.name}'s profile`} className="service-profile-photo" />
              <div className="service-info">
                <h3>{service.name}</h3>
                <p>Service: {service.service}</p>
                <p>Price: {service.price}</p>
              </div>
              <div className="service-actions">
                <button className="action-button edit-button" onClick={() => handleEdit(service.id)}>
                  <EditOutlined />
                </button>
                <button className="action-button delete-button" onClick={() => handleDelete(service.id)}>
                  <DeleteOutlined />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-services">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;