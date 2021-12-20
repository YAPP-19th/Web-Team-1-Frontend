import React, { lazy, Suspense } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './style.scss';

import Mypage from './Mypage';
import QuestList from './QuestList';
import RoadmapList from './RoadmapList';
import Achievement from './Achievement';

const pathname = '/profile';

const tabList = [
  {
    name: '프로필',
    route: `${pathname}/mypage`,
  },
  {
    name: '퀘스트',
    route: `${pathname}/quest`,
  },
  {
    name: '로드맵',
    route: `${pathname}/roadmap`,
  },
  {
    name: '항해 업적',
    route: `${pathname}/achievement`,
  },
];

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <div className="profile-content-wrapper">
        <div className="profile-tab-bar">
          {tabList.map((item) => (
            <NavLink
              className="profile-link-button"
              key={item.name}
              to={item.route}
              activeClassName="profile-link-button-active"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="profile-content">
          <Suspense fallback={null}>
            <Switch>
              <Route
                path="/profile/mypage"
                component={() => (
                  <Mypage
                    nickname="호랑이형님"
                    level={3}
                    job="Frontend"
                    selfDescription="안녕하세요, 저는 프론트앤드 개발자입니다. 제이쿼리, 자바스크립트 등에 관심이 많습니다. 현재 IT 업계 ABC회사에서 근무하고 있습니다 or 안녕하세요 저는 대학교 4학년 컴퓨터공학과 가나다라마바사입니다."
                  />
                )}
              />
              <Route path="/profile/quest" component={QuestList} />
              <Route path="/profile/roadmap" component={RoadmapList} />
              <Route path="/profile/achievement" component={Achievement} />
              <Redirect to="/profile/mypage" />
            </Switch>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Profile;
