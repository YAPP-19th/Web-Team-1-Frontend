import React, { Suspense, lazy } from 'react';
import { Header, Footer } from '@src/components/molecules';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Landing = lazy(() => import('@src/pages/Landing'));
const Quest = lazy(() => import('@src/pages/Quest'));
const QuestCreate = lazy(() => import('@src/pages/QuestCreate'));
const Profile = lazy(() => import('@src/pages/Profile'));
const Login = lazy(() => import('@src/pages/Login'));
const NotFound = lazy(() => import('@src/pages/NotFound'));

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/quest" component={Quest} />
            {/* 퀘스트 생성 페이지 적용을 위해 밑에 라우터를 임시로 생성했습니다. 
            추후 라우팅 주소는 바뀔수 있습니다. */}
            <Route path="/quest/create" component={QuestCreate} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
};

export default App;
