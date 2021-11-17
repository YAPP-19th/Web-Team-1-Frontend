import React from 'react';
import useScrollCount from '@src/hooks/useScrollCount';
import Text from '@src/atoms/Text';
import CountItems from './list';
import './style.scss';

const Count: React.FC = () => {
  const countHooks: { [key: number]: ReturnType<typeof useScrollCount> } = {
    0: useScrollCount(0, 10),
    1: useScrollCount(0, 130),
    2: useScrollCount(0, 80),
  };

  return (
    <section className="count-background">
      <ul className="count-wrapper">
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
              <Text
                className="number-text"
                fontWeight="light"
                fontColor="white"
                ref={countHooks[index]}
              >
                0
              </Text>
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
      </ul>
    </section>
  );
};

export default Count;
