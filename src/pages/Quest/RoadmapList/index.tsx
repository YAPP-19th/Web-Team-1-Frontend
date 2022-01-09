import React, { useCallback } from 'react';
import styled from 'styled-components';
import './style.scss';
import { Button, Text } from '@src/components/atoms';
import { Paper } from '@src/components/molecules';
import Carousel from '@src/components/organisms/Carousel';
import { useHistory } from 'react-router-dom';
import { useGetRoadmapsRecentQuery } from '@src/services/giljob';

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const RoadmapList: React.FC = () => {
  const history = useHistory();
  const handleButtonClick = useCallback(() => {
    history.push('/create-roadmap');
  }, [history]);

  const { data: roadmapList, isSuccess } = useGetRoadmapsRecentQuery({
    size: 12,
  });

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
              handleClick={handleButtonClick}
              hasShadow
            />
          </div>
        </div>
      </section>
      <section className="quest-wrapper">
        {isSuccess && (
          <Carousel>
            {roadmapList?.data.map(({ id, name, position, writer }) => (
              <SliderItem key={id}>
                <Paper
                  category={position}
                  name={name}
                  level={1}
                  author={writer.nickname}
                />
              </SliderItem>
            ))}
          </Carousel>
        )}
      </section>
    </div>
  );
};

export default RoadmapList;
