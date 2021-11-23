import React from 'react';
import Text from '@src/components/atoms/Text';
import './style.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="text-container">
        <Text fontColor="gray">GILJOB</Text>
        <Text fontColor="gray" fontWeight="regular">
          YAPP 19TH WEB 1 TEAM
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
