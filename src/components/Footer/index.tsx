import React from 'react';
import Text from '@src/atoms/Text';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerWrapper">
        <div className="TextContainer">
          <Text className="footerText" fontColor="gray">
            GILJOB
          </Text>
          <Text className="footerText" fontColor="gray" fontWeight="regular">
            YAPP 19TH WEB 1 TEAM
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
