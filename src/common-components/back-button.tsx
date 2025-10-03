import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

interface BackButtonProps {
  navigateTo?: string;
  color?: string;
  backgroundColor?: string;
  size?: 'small' | 'middle' | 'large';
}

const BackButton: React.FC<BackButtonProps> = ({ 
  navigateTo = '/', 
  color = '#fff',
  backgroundColor = 'transparent',
  size = 'middle'
}) => {
  const navigate = useNavigate();

  return (
    <Button
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(navigateTo)}
      size={size}
      style={{ 
        border: 'none', 
        background: backgroundColor, 
        color: color 
      }}
    />
  );
};

export default BackButton;