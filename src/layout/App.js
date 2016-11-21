import React, { Component } from 'react';
// import logo from '../logo.svg';
import { Router, Route, browserHistory } from 'react-router'
import '../App.css';
import {Homepage} from '../pages/homepage/homepage';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Homepage}></Route>
        </Router>
    );
  }
}

export default App;
