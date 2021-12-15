import React, { lazy, Suspense } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './style.scss';

const Mypage = lazy(() => import('@src/pages/Profile/Mypage'));
const QuestList = lazy(() => import('@src/pages/Profile/QuestList'));

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
                    selfDescription="aaa"
                  />
                )}
              />
              <Route path="/profile/quest" component={QuestList}></Route>
              <Redirect to="/profile/mypage" />
            </Switch>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Profile;
