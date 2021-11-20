import React from 'react';
import Text from '@src/components/atoms/Text';
import Content from '@src/components/molecules/Content';
import contentsList from './list';
import './style.scss';

const Contents: React.FC = () => {
  return (
    <section className="contents-background">
      <div className="contents-wrapper">
        <div className="contents-title">
          <Text
            align="center"
            fontColor="white"
            fontSize="xx-large"
            fontWeight="regular"
          >
            내가 <b>목표하는 직업</b>을 가지려면 <b>어떤 경험들이 필요</b>할까?
          </Text>
          <span className="title-line" />
          <Text
            align="center"
            fontColor="white"
            fontSize="xxx-large"
            fontWeight="bold"
          >
            길잡으로 취업 준비 해야하는 이유
          </Text>
        </div>

        {contentsList.map(({ main, sub, image, direction }) => (
          <Content
            main={main}
            sub={sub}
            image={image}
            direction={direction as 'row' | 'reverse'}
            key={main}
          />
        ))}
      </div>
    </section>
  );
};

export default Contents;
