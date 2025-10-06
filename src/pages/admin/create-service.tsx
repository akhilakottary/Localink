import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './create-service.css';
import { Input, Upload } from 'antd';
import { CloseOutlined, UploadOutlined } from '@ant-design/icons';
import Button from '../../common-components/button';

const { TextArea } = Input;

const CreateService: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profilePhoto: null,
    title: '',
    price: '',
    contact: '',
    description: '',
    file: null
  });

  const handleClose = () => {
    navigate('/admin-dashboard');
  };

  const handleSave = () => {
    console.log('Form data:', formData);
    // Add save logic here
    navigate('/admin-dashboard');
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="create-service-container">
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

      {/* Close Button */}
      <button className="close-button" onClick={handleClose}>
        <CloseOutlined />
      </button>

      {/* Form Card */}
      <div className="form-card">
        <h1 className="form-title">Create Service</h1>

        <div className="form-group">
          <label className="form-label">Profile Photo</label>
          <Upload
            maxCount={1}
            listType="picture"
            beforeUpload={(file) => {
              handleInputChange('profilePhoto', file);
              return false;
            }}
          >
            <Button onClick={() => {}} className="upload-button">
              <UploadOutlined /> Upload Photo
            </Button>
          </Upload>
        </div>

        <div className="form-group">
          <label className="form-label">Title</label>
          <Input
            placeholder="Enter service title"
            className="form-input"
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price/hr</label>
          <Input
            placeholder="Enter price per hour"
            className="form-input"
            value={formData.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Contact</label>
          <Input
            placeholder="Enter contact number"
            className="form-input"
            value={formData.contact}
            onChange={(e) => handleInputChange('contact', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <TextArea
            placeholder="Enter service description"
            className="form-textarea"
            rows={4}
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Additional File</label>
          <Upload
            maxCount={1}
            beforeUpload={(file) => {
              handleInputChange('file', file);
              return false;
            }}
          >
            <Button onClick={() => {}} className="upload-button">
              <UploadOutlined /> Upload File
            </Button>
          </Upload>
        </div>

        <div className="form-actions">
          <Button onClick={handleSave} className="save-button">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateService;