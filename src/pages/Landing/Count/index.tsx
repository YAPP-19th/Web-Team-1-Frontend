import React from 'react';
import useScrollCount from '@src/hooks/useScrollCount';
import Text from '@src/components/atoms/Text';
import CountItems from './list';
import './style.scss';

export interface Count {
  totalQuestCount: number;
  onProgressQuestCount: number;
  totalParticipantCount: number;
}

const Count: React.FC = () => {
  // const { data } = useGetQuestsCountQuery('');
  const countHooks: { [key: number]: ReturnType<typeof useScrollCount> } = {
    0: useScrollCount(10),
    1: useScrollCount(130),
    2: useScrollCount(80),
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
