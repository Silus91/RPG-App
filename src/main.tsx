import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import combineReducers from './app/reducers/index';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'react-redux';
import Dice from './app/components/Dice/Dice';
import TodoMain from './app/components/Quests/TodoMain';
import Profile from './app/components/Profile/Profile';
import Home from './app/components/Home/Home';

const store = createStore(combineReducers);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dice" component={Dice} />
        <Route exact path="/todoMain" component={TodoMain} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
