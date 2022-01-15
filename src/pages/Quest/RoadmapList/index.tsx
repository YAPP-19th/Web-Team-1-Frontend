import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import './style.scss';
import { Button, Modal, Text, Toast } from '@src/components/atoms';
import { Paper } from '@src/components/molecules';
import { Carousel, Roadmap } from '@src/components/organisms';
import { useHistory } from 'react-router-dom';
import {
  useGetRoadmapsRecentQuery,
  usePostRoadmapsScrapMutation,
} from '@src/services/giljob';
import useRoadmapModal from '@src/hooks/useRoadmapModal';
import { useSelector } from 'react-redux';
import { modalSelector } from '@src/slices/modalSlice';
import toast from 'react-hot-toast';

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
  const { isModalOn } = useSelector(modalSelector);
  const [clickedRoadmapId, setClickedRoadmapId] = useState(0);
  const { roadmapModal, setRoadmapModal } = useRoadmapModal(clickedRoadmapId);
  const [postRoadmapsScrap] = usePostRoadmapsScrapMutation();
  const handlePaperClick = useCallback(
    (id: number) => {
      setClickedRoadmapId(id);
      setRoadmapModal();
    },
    [setRoadmapModal],
  );

  const { data: roadmapList, isSuccess } = useGetRoadmapsRecentQuery({
    size: 12,
  });

  const generateToast = useCallback(
    (mainText: string, subText: string) =>
      toast(<Toast mainText={mainText} subText={subText} color="blue" />, {
        duration: 2000,
        position: 'bottom-left',
        style: {
          background: 'transparent',
          boxShadow: 'none',
        },
      }),
    [],
  );

  const handleScrap = useCallback(
    (roadmapId: number) => {
      postRoadmapsScrap({ roadmapId });
      generateToast('스크랩 성공!', '이 로드맵이 스크랩되었습니다.');
    },
    [generateToast, postRoadmapsScrap],
  );

  return (
    <div className="quest-page-roadmap">
      {isModalOn && (
        <Modal>
          <Roadmap
            {...roadmapModal}
            handleScrap={() => handleScrap(clickedRoadmapId)}
            roadmapId={clickedRoadmapId}
            iconSize="small"
          />
        </Modal>
      )}
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
                  level={
                    (Math.floor(writer.point / 100) + 1) as 1 | 2 | 3 | 4 | 5
                  }
                  author={writer.nickname}
                  handleClick={() => handlePaperClick(id)}
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
