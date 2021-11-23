import React, { Suspense, lazy } from 'react';
import { Header, Footer } from '@src/components/molecules';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Landing = lazy(() => import('@src/pages/Landing'));
const Quest = lazy(() => import('@src/pages/Quest'));
const Profile = lazy(() => import('@src/pages/Profile'));
const Login = lazy(() => import('@src/pages/Login'));
const NotFound = lazy(() => import('@src/pages/NotFound'));

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header isLogin={false} />
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/quest" component={Quest} />
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
