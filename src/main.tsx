import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import combineReducers from './app/reducers/index';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router'
import { Provider } from 'react-redux';
import Dice from './app/components/Dice/Dice';
import Todo from './app/components/Todo/Todo';
import Profile from './app/components/Profile/Profile';
import Home from './app/components/Home/Home';

const store = createStore(
    combineReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dice" component={Dice} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
