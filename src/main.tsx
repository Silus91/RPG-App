import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';
import Dice from './app/components/Dice/Dice';
import Todo from './app/components/Todo/Todo';
import Profile from './app/components/Profile/Profile';
import Navbar from './app/components/Navbar';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/dice" component={Dice} />
      <Route exact path="/todo" component={Todo} />
      <Route exact path="/" component={Navbar} />
    </Switch>
  </Router>
,
  document.getElementById('root')
);
