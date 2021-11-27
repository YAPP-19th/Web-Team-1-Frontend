import React from 'react';
import styled from 'styled-components';
import './style.scss';
import { Button, Text } from '@src/components/atoms';
import { Paper } from '@src/components/molecules';
import Carousel from '@src/components/organisms/Carousel';

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

// 더미 데이터
// TODO: 서버로부터 얻어온 데이터로 대체 예정
const items = [
  { key: 'a' },
  { key: 'b' },
  { key: 'c' },
  { key: 'd' },
  { key: 'e' },
  { key: 'f' },
  { key: 'g' },
  { key: 'h' },
];

const RoadmapList: React.FC = () => {
  return (
    <div className="quest-page-roadmap">
      <section className="quest-intro">
        <div className="intro-wrapper">
          <div className="intro-text">
            <Text fontSize="xxx-large" fontColor="main" fontWeight="bold">
              항해의 시작,
            </Text>
            <Text fontSize="xxx-large" fontColor="main" fontWeight="bold">
              취업 로드맵을 따라서
            </Text>
          </div>
          <div className="intro-button">
            <Button
              innerText="로드맵 생성"
              buttonColor="white"
              textColor="gil-blue"
              textSize="medium"
              hasShadow
            />
          </div>
        </div>
      </section>
      <section className="quest-wrapper">
        <Carousel>
          {items.map((item) => (
            <SliderItem key={item.key}>
              <Paper
                category="Front-End"
                name="프론트엔드 개발자가 되는 법"
                level={1}
                author="호랑이형님"
              />
            </SliderItem>
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default RoadmapList;
