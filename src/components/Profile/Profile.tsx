import React from 'react';
import './style.scss';
import Box from '@src/atoms/Box';
import AchievementBadge from '../AchievementBadge';
import Form from '@src/atoms/Form';
import Lv1 from '@src/assets/images/Lv1.svg';

export interface ProfileProps {
  job: 'Frontend' | 'Backend';
  nickname: string;
  selfDescription: string | number | readonly string[] | undefined;
}

const Profile: React.FC<ProfileProps> = ({
  job,
  nickname,
  selfDescription,
}) => {
  return (
    <div className="_PROFILE_">
      <div className="_ITEM_">
        <Box>
          <img
            className="Lv1Image"
            src={Lv1}
            alt="Lv1Image"
            width="200"
            height="200"
          />
          <Form title="닉네임">
            <input type="text" placeholder="" defaultValue={nickname} />
          </Form>
          <Form title="직군">
            <select>
              <option>Frontend</option>
              <option>Backend</option>
            </select>
          </Form>
        </Box>
      </div>
      <div className="_ITEM_">
        <Box>
          <Form title="자기소개" align="column">
            <textarea
              rows={3}
              cols={80}
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
          <AchievementBadge
            title="5급 조타기"
            description="길잡 신규가입 시 달성"
          />
        </Box>
      </div>
    </div>
  );
};

export default Profile;
