import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import '../styles/index.css';
import {Home} from '../pages/home/home';
import {Decks} from '../pages/decks/decks';
import {ArenaPicker} from '../pages/arena-picker/arena-picker';
import {Expansions} from '../pages/expansions/expansions';
import {CreateDeck} from '../pages/create-deck/create-deck';
import {Forum} from '../pages/forum/forum';
import {Tournaments} from '../pages/tournaments/tournaments';
import {Streams} from '../pages/streams/streams';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="strona-glowna" component={Home} />
          <Route path="talie-kart" component={Decks} />
          <Route path="arena-picker" component={ArenaPicker} />
          <Route path="dodatki" component={Expansions} />
          <Route path="stworz-talie-kart" component={CreateDeck} />
          <Route path="forum" component={Forum} />
          <Route path="turnieje" component={Tournaments} />
          <Route path="streamerzy" component={Streams} />
        </Router>
    );
  }
}

export default App;
