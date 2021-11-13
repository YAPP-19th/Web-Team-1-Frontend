import React from 'react';
import Text from '@src/atoms/Text';
import Content from '@src/pages/Landing/templates/Content';
import detailItems from './detailItems';
import './style.scss';

const Detail: React.FC = () => {
  return (
    <section className="detail-background">
      <div className="detail-wrapper">
        <div className="detail-title">
          <Text
            align="center"
            fontColor="white"
            fontSize="xx-large"
            fontWeight="regular"
          >
            내가 <b>목표하는 직업</b>을 가지려면 <b>어떤 경험들이 필요</b>
            할까?
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

        {detailItems.map(({ main, sub, image, direction }) => (
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

export default Detail;
