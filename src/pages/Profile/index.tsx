import React from 'react';
import { Mypage } from '@src/components/molecules';
import './style.scss';

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <Mypage
        nickname="호랑이형님"
        level={3}
        job="Frontend"
        selfDescription="aaa"
      />
    </section>
  );
};

export default Profile;
