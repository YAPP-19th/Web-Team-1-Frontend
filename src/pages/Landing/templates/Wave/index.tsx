import React from 'react';
import './style.scss';

const Wave: React.FC = () => {
  return (
    <div className="ocean">
      <div className="wave wave1" />
      <div className="wave wave2" />
    </div>
  );
};

export default Wave;
