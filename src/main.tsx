import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './app/reducers/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dice from './app/components/Dice/Dice';
import TodoMain from './app/components/Quests/TodoMain';
import Profile from './app/components/Profile/Profile';
import Home from './app/components/Home/Home';
import Challange from './app/components/Challange/Challange';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dice" component={Dice} />
        <Route exact path="/todoMain" component={TodoMain} />
        <Route exact path="/challange" component={Challange} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
