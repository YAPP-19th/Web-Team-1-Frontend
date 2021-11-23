import React from 'react';
import Based from '@src/pages/Based';
import Main from './Main';
import Contents from './Contents';
import Count from './Count';
import Sub from './Sub';

const Landing: React.FC = () => {
  return (
    <Based hasHeader>
      <Main />
      <Contents />
      <Count />
      <Sub />
    </Based>
  );
};

export default Landing;
