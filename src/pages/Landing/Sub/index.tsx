import React from 'react';
import { Button, Text } from '@src/components/atoms';
import './style.scss';
import { Link } from 'react-router-dom';

const Sub: React.FC = () => {
  return (
    <section className="sub-background">
      <div className="sub-wave" />
      <div className="sub-wrapper">
        <div className="sub-container">
          <Text
            align="center"
            fontSize="large"
            fontWeight="bold"
            fontColor="job-navy"
          >
            취업의 바다를 항해하라!
          </Text>
          <Text align="center" fontWeight="bold" fontColor="job-navy">
            길잡과 함께
          </Text>
          <Text align="center" fontWeight="bold" fontColor="gil-blue">
            취준 레벨업!
          </Text>
          <Link to="/quest">
            <Button
              innerText="START"
              buttonColor="job-navy"
              textColor="white"
              textSize="large"
              hasBorder
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sub;
