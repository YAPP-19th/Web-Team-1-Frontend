import React from 'react';
import Text from '@src/atoms/Text';

import './style.scss';

const Footer: React.FC = () => {
  return (
    <section className="footer-background">
      <div className="footer-wrapper">
        <div className="footer">
          <Text>취업의 바다를 항해하라!</Text>
          <Text>길잡과 함께</Text>
          <Text>취준 레벨업!</Text>
          <button className="start-button" type="button">
            START
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
