import React, { ReactNode } from 'react';
import '../cssFile-Card/card.css';

interface CardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  description?: string; 
}

const Card: React.FC<CardProps> = ({ title, value, icon, description }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        {icon && <div className="card-icon">{icon}</div>}
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-value">{value}</p>
      {description && <p className="card-description">{description}</p>}
    </div>
  );
};

export default Card;