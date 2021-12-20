import React, { useState } from 'react';
import {
  Text,
  ProgressBar,
  Icon,
  AchievementBadge,
  Box,
  Textarea,
  Button,
} from '@src/components/atoms';
import {
  exp_achievement,
  quest_achievement,
} from '@src/pages/Profile/achievement_data.json';
import cn from 'classnames';
import './style.scss';

export interface MypageProps {
  nickname: string;
  level: number;
  job: 'Frontend' | 'Backend';
  selfDescription: string;
}

const Mypage: React.FC<MypageProps> = ({
  nickname,
  level,
  job,
  selfDescription,
}) => {
  const [isIntroduceEditMode, setIsIntroduceEditMode] = useState(false);
  const [isPrivacyEditMode, setIsPrivacyEditMode] = useState(false);

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

  return (
    <div className="_PROFILE_">
      <Box className="privacy-box" backgroundColor="gil-blue">
        <Icon size="profile" level={3} />
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
          <Text fontColor="white" align="center">
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
          <Text fontColor="white" align="center">
            {job}
          </Text>
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
          defaultValue={selfDescription}
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
