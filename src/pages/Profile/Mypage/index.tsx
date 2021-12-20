import React, { useCallback, useState } from 'react';
import {
  Text,
  ProgressBar,
  Icon,
  AchievementBadge,
  Box,
  Textarea,
  Button,
  Dropdown,
} from '@src/components/atoms';
import {
  exp_achievement,
  quest_achievement,
} from '@src/pages/Profile/achievement_data.json';
import cn from 'classnames';
import './style.scss';
import { POSITION_LIST } from '@src/constants/dropdown';

const Mypage: React.FC = () => {
  const [isIntroduceEditMode, setIsIntroduceEditMode] = useState(false);
  const [isPrivacyEditMode, setIsPrivacyEditMode] = useState(false);

  const [nickname, setNickname] = useState('호랑이형님');
  const [level, setLevel] = useState<1 | 2 | 3 | 4 | 5>(4);
  const [position, setPosition] = useState<string | number>('FRONTEND');
  const [introduce, setIntroduce] = useState(
    '안녕하세요, 저는 프론트앤드 개발자입니다. 제이쿼리, 자바스크립트 등에 관심이 많습니다. 현재 IT 업계 ABC회사에서 근무하고 있습니다 or 안녕하세요 저는 대학교 4학년 컴퓨터공학과 가나다라마바사입니다.',
  );

  const handlePrivacyEditClick = () => {
    setIsPrivacyEditMode((state) => !state);
  };

  const handlePrivacyEditCancelClick = () => {
    setIsPrivacyEditMode((state) => !state);
  };

  const handlePrivacyEditCompleteClick = () => {
    setIsPrivacyEditMode((state) => !state);
  };

  const handleIntroEditClick = () => {
    setIsIntroduceEditMode((state) => !state);
  };

  const handleIntroEditCancelClick = () => {
    setIsIntroduceEditMode((state) => !state);
  };

  const handleIntroEditCompleteClick = () => {
    setIsIntroduceEditMode((state) => !state);
  };

  const handlePositionChange = useCallback(
    (type: string, value: string | number) => {
      setPosition(value);
    },
    [],
  );

  const handleNicknameChange = useCallback((e: any) => {
    setNickname(e.target.value);
  }, []);

  return (
    <div className="_PROFILE_">
      <Box className="privacy-box" backgroundColor="gil-blue">
        <Icon size="profile" level={level} />
        <div className="privacy-wrapper">
          <Text
            fontColor="white"
            fontSize="medium"
            fontWeight="bold"
            align="center"
          >
            닉네임
          </Text>
          <input
            className={cn(
              'nickname-input',
              isPrivacyEditMode ? 'isPrivacyEditMode' : '',
            )}
            type="text"
            placeholder=""
            defaultValue={nickname}
            maxLength={7}
            readOnly={!isPrivacyEditMode}
            onChange={handleNicknameChange}
          />
        </div>
        <div className="privacy-wrapper">
          <Text
            fontColor="white"
            fontSize="medium"
            fontWeight="bold"
            align="center"
          >
            레벨
          </Text>
          <Text fontColor="white" align="center" fontSize="medium">
            Lv.{level}
          </Text>
        </div>
        <div className="privacy-wrapper">
          <Text
            fontColor="white"
            fontSize="medium"
            fontWeight="bold"
            align="center"
          >
            직군
          </Text>
          {isPrivacyEditMode ? (
            <Dropdown
              fontColor="white"
              placeholder={String(position)}
              hasBorder={false}
              list={POSITION_LIST}
              selected={position}
              onDispatch={handlePositionChange}
            />
          ) : (
            <Text fontColor="white" align="center" fontSize="medium">
              {position}
            </Text>
          )}
        </div>
        <div className="button-wrapper">
          {isPrivacyEditMode ? (
            <>
              <Button
                className="button-item"
                innerText="취소"
                buttonColor="white"
                textColor="gil-blue"
                textSize="small"
                onHover={false}
                handleClick={handlePrivacyEditCancelClick}
              ></Button>
              <Button
                className="button-item"
                innerText="수정"
                buttonColor="job-navy"
                textColor="white"
                textSize="small"
                onHover={false}
                handleClick={handlePrivacyEditCompleteClick}
              ></Button>
            </>
          ) : (
            <button
              type="button"
              className="edit-button"
              onClick={handlePrivacyEditClick}
            ></button>
          )}
        </div>
      </Box>
      <Box className="introduce-box">
        <div className="introduce-title-btn-wrapper">
          <Text align="start" fontSize="medium" fontWeight="bold">
            자기소개
          </Text>
          <div className="button-wrapper">
            {isIntroduceEditMode ? (
              <>
                <Button
                  className="button-item"
                  innerText="취소"
                  buttonColor="main-gray"
                  textColor="gil-blue"
                  textSize="small"
                  onHover={false}
                  handleClick={handleIntroEditCancelClick}
                ></Button>
                <Button
                  className="button-item"
                  innerText="수정"
                  buttonColor="gil-blue"
                  textColor="white"
                  textSize="small"
                  onHover={false}
                  handleClick={handleIntroEditCompleteClick}
                ></Button>
              </>
            ) : (
              <button
                type="button"
                className="edit-button"
                onClick={handleIntroEditClick}
              ></button>
            )}
          </div>
        </div>
        <Textarea
          hasLimit={isIntroduceEditMode}
          readOnly={!isIntroduceEditMode}
          defaultValue={introduce}
        />
      </Box>
      <Box className="achievement-box">
        <AchievementBadge
          id={exp_achievement?.list[0]?.id}
          title={exp_achievement?.list[0]?.title}
          description={exp_achievement?.list[0]?.description}
        />
      </Box>
      <Box className="achievement-box">
        <AchievementBadge
          id={quest_achievement?.list[0]?.id}
          title={quest_achievement?.list[0]?.title}
          description={quest_achievement?.list[0]?.description}
        />
      </Box>
      <Box className="progress-bar-box">
        <Text fontSize="medium" fontWeight="bold">
          경험치 포인트
        </Text>
        <div className="progress-bar-container">
          {/* TODO: 더미 데이터 삭제 */}
          <ProgressBar title="Backend" value={60} />
          <ProgressBar title="Frontend" value={12} />
        </div>
      </Box>
    </div>
  );
};

export default Mypage;
