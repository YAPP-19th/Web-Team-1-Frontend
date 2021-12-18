import React, { Suspense, lazy } from 'react';
import { Header, Footer } from '@src/components/molecules';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Landing = lazy(() => import('@src/pages/Landing'));
const Quest = lazy(() => import('@src/pages/Quest'));
const CreateQuest = lazy(() => import('@src/pages/CreateQuest'));
const CreateRoadmap = lazy(() => import('@src/pages/CreateRoadmap'));
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
            <Route exact path="/quest" component={Quest} />
            <Route path="/create-quest" component={CreateQuest} />
            <Route path="/create-roadmap" component={CreateRoadmap} />
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
