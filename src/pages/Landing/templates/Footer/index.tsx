import React from 'react';
import Text from '@src/atoms/Text';
import './style.scss';

const Footer: React.FC = () => {
  return (
    <section className="footer-background">
      <div className="footer-wrapper">
        <div className="footer-container">
          <Text
            align="center"
            fontSize="large"
            fontWeight="bold"
            fontColor="job-navy"
            lineHeight="wide"
          >
            취업의 바다를 항해하라!
          </Text>

          <Text align="center" fontWeight="bold" fontColor="job-navy">
            길잡과 함께
          </Text>
          <Text align="center" fontWeight="bold" fontColor="gil-blue">
            취준 레벨업!
          </Text>
          <button className="start-button" type="button">
            <Text align="center" fontWeight="bold" fontColor="white">
              START
            </Text>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
