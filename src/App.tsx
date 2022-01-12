import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header, Footer } from '@src/components/molecules';
import { Loading, Floating } from '@src/components/atoms';
import PrivateRoute from '@src/utils/PrivateRoute';

const Landing = lazy(() => import('@src/pages/Landing'));
const Quest = lazy(() => import('@src/pages/Quest'));
const CreateQuest = lazy(() => import('@src/pages/CreateQuest'));
const CreateRoadmap = lazy(() => import('@src/pages/CreateRoadmap'));
// const Detail = lazy(() => import('@src/pages/Detail'));
const Profile = lazy(() => import('@src/pages/Profile'));
const Login = lazy(() => import('@src/pages/Login'));
const NotFound = lazy(() => import('@src/pages/NotFound'));

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Toaster />
        <Floating />
        <Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route exact path="/quest" component={Quest} />
            <PrivateRoute path="/create-quest" component={CreateQuest} />
            <PrivateRoute path="/create-roadmap" component={CreateRoadmap} />
            {/* <Route path="/detail/:questId" component={Detail} /> */}
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
};

export default App;
