import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import '../styles/index.css';
import {Home} from '../pages/home/home';
import {Decks} from '../pages/decks/decks';
import {ArenaPicker} from '../pages/arena-picker/arena-picker';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="strona-glowna" component={Home} />
          <Route path="talie-kart" component={Decks} />
          <Route path="arena-picker" component={ArenaPicker} />
        </Router>
    );
  }
}

export default App;
