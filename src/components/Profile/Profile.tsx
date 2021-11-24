import React from 'react';
import './style.scss';
import Box from '@src/atoms/Box';
import AchievementBadge from '../AchievementBadge';
import Form from '@src/atoms/Form';
import Lv1 from '@src/assets/images/Lv1.svg';
import Text from '@src/atoms/Text';
import ProgressBar from '@src/atoms/ProgressBar';

export interface ProfileProps {
  nickname: string;
  level: number;
  job: 'Frontend' | 'Backend';
  selfDescription: string | number | readonly string[] | undefined;
}

const Profile: React.FC<ProfileProps> = ({
  nickname,
  level,
  job,
  selfDescription,
}) => {
  return (
    <div className="_PROFILE_">
      <div className="_ITEM_">
        <Box backgroundColor="gil-blue">
          <div className="privacy-container">
            <img className="level-img" src={Lv1} alt="LvImage" />
            <div className="form-wrapper">
              <Form title="닉네임" titleAlign="center" titleColor="white">
                <Text fontColor="white" align="center">
                  {nickname}
                </Text>
                {/* <input type="text" placeholder="" defaultValue={nickname} /> */}
              </Form>
              <Form title="레벨" titleAlign="center" titleColor="white">
                <Text fontColor="white" align="center">
                  Lv.{level}
                </Text>
              </Form>
              <Form title="직군" titleAlign="center" titleColor="white">
                <Text fontColor="white" align="center">
                  {job}
                </Text>
                {/* <select>
                <option>Frontend</option>
                <option>Backend</option>
              </select> */}
              </Form>
            </div>
          </div>
        </Box>
      </div>
      <div className="_ITEM_">
        <Box>
          <Form title="자기소개" align="column">
            <textarea
              className="self-description-textarea"
              rows={3}
              defaultValue={selfDescription}
            ></textarea>
          </Form>
        </Box>
      </div>
      <div className="_ITEM_">
        <Box>
          <AchievementBadge
            title="5급 조타기"
            description="길잡 신규가입 시 달성"
          />
        </Box>
      </div>
      <div className="_ITEM_">
        <Box>
          <AchievementBadge
            title="5급 조타기"
            description="길잡 신규가입 시 달성"
          />
        </Box>
      </div>
      <div className="_ITEM_">
        <Box>
          <Text fontSize="medium" fontWeight="bold">
            경험치 포인트
          </Text>
          <div className="progress-bar-container">
            <ProgressBar title="Backend" value={60} />
            <ProgressBar title="Frontend" value={12} />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
