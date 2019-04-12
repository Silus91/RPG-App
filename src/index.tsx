import * as React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import Dice from './components/Dice/Dice';
import Todo from './components/Todo/Todo';
import Navbar from './components/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
  <Router>
    <Switch>
      <Route path="/profile" component={Profile} />
      <Route path="/dice" component={Dice} />
      <Route path="/todo" component={Todo} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  </MuiThemeProvider>
, document.getElementById('root'));
