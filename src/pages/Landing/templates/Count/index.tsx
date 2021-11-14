import React from 'react';
import useScrollCount from '@src/hooks/useScrollCount';
import Text from '@src/atoms/Text';
import './style.scss';

const CountItems = [
  {
    title: '전체 퀘스트 수',
    unit: '개',
  },
  {
    title: '진행 중 퀘스트',
    unit: '개',
  },
  {
    title: '퀘스트 참여자 수',
    unit: '명',
  },
];

interface animate {
  [key: number]: unknown;
}

const Count: React.FC = () => {
  const animatedCount: animate = {
    0: useScrollCount(0, 10),
    1: useScrollCount(0, 130),
    2: useScrollCount(0, 80),
  };

  return (
    <section className="count-background">
      <div className="count-wrapper">
        {CountItems.map(({ title, unit }, index) => (
          <li className="count" key={title}>
            <div className="upper-wrapper">
              <Text
                fontSize="medium"
                fontWeight="bold"
                align="center"
                fontColor="white"
              >
                {title}
              </Text>
            </div>
            <div className="lower-wrapper">
              <span className="number-text" {...animatedCount[index]}>
                0
              </span>
              <Text
                className="unit-text"
                fontSize="xxx-large"
                fontWeight="light"
                fontColor="white"
              >
                {unit}
              </Text>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Count;
