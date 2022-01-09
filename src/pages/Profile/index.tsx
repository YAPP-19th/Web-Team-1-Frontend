import React, { Suspense, useEffect, useMemo } from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './style.scss';

import Mypage from './Mypage';
import QuestList from './QuestList';
import RoadmapList from './RoadmapList';
import Achievement from './Achievement';
import Loading from '@src/components/atoms/Loading';
import { useGetUsersMeQuery } from '@src/services/giljob';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '@src/slices/profileSlice';

const pathname = '/profile';

const TAB_LIST = [
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
  const { data: me, isSuccess } = useGetUsersMeQuery();
  const dispatch = useDispatch();
  const userId = useMemo(() => me?.data.id ?? -1, [me]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserInfo(me?.data));
    }
  }, [me]);

  return (
    <section className="profile">
      {isSuccess && (
        <>
          <div className="profile-content-wrapper">
            <div className="profile-tab-bar">
              {TAB_LIST.map((item) => (
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
              <Suspense fallback={Loading}>
                <Switch>
                  <Route path="/profile/mypage" component={Mypage} />
                  <Route
                    path="/profile/quest"
                    component={() => <QuestList userId={userId} />}
                  />
                  {/* <Route path="/profile/quest" component={QuestList} /> */}
                  <Route
                    path="/profile/roadmap"
                    component={() => <RoadmapList userId={userId} />}
                  />
                  {/* <Route path="/profile/roadmap" component={RoadmapList} /> */}
                  <Route path="/profile/achievement" component={Achievement} />
                  <Redirect to="/profile/mypage" />
                </Switch>
              </Suspense>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Profile;
