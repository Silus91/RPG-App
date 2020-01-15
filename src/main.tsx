import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { rootReducer } from './app/reducers/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Dice from './app/components/Dice/Dice';
import TodoMain from './app/components/Quests/TodoMain';
import Profile from './app/components/Profile/Profile';
import Home from './app/components/Home/Home';
import Challange from './app/components/Challange/Challange';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/dice" component={Dice} />
        <Route path="/todoMain" component={TodoMain} />
        <Route path="/challange" component={Challange} />
        <Route path="/list" component={ListCreator} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
