import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Landing,
  Quest,
  Ranking,
  Community,
  Profile,
  Login,
  NotFound,
} from '@src/pages';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/quest" component={Quest} />
        <Route path="/ranking" component={Ranking} />
        <Route path="/profile" component={Profile} />
        <Route path="/community" component={Community} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
