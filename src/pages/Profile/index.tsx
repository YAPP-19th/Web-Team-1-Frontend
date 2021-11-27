import React from 'react';
import Mypage from './Mypage/Mypage';

const Profile: React.FC = () => {
  return (
    <div style={{ width: '1020', height: '800' }}>
      <Mypage
        nickname="호랑이형님"
        level={3}
        job="Frontend"
        selfDescription="aaa"
      />
    </div>
  );
};

export default Profile;
