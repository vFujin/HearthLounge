import React, { Component } from 'react';

import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import {Home} from './pages/home/home';

import {Cards} from './pages/cards/cards';
import {ArenaPicker} from './pages/arena-picker/picked-class/arena-picker';


import CreateDeck from './pages/create-deck/create-deck';
import {Forum} from './pages/forum/forum';
import {Tournaments} from './pages/tournaments/tournaments';
import {Streams} from './pages/streams/streams';

import {Decks} from './pages/decks/decks';
import {ClassDeck} from './pages/decks/class-deck';
import {Deck} from './pages/decks/choosen-deck/deck';

import {PickedClass} from './pages/arena-picker/picked-class/right-container/after-class-pick';

import {Expansions} from './pages/expansions/expansions';
import {ExpansionOverview} from './pages/expansions/right-container/expansion-overview';
import {ExpansionContent} from './pages/expansions/right-container/expansion-content';
import {AdventureContent} from './pages/adventures/right-container/adventure-content';

import {Adventures} from './pages/adventures/adventures';
import {AdventureBosses} from './pages/adventures/assets/bosses';
import {AdventureCards} from './pages/adventures/assets/cards';
import {AdventureClassChallanges} from './pages/adventures/assets/class-challanges';
import {AdventureCost} from './pages/adventures/assets/cost';
import {AdventureStructure} from './pages/adventures/assets/structure';

import {Main} from './Main';

import {BossGuide} from './pages/adventures/assets/boss-details/boss-guide';
export class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/"                   component={Main}>
            <IndexRoute                     component={Home} />
            <Route path="strona-glowna"     component={Home} />
            <Route path="talie-kart"        component={Decks}>
              <Route path=":class"          component={ClassDeck}>
                <Route path=":id"           component={Deck} />
              </Route>
            </Route>
            <Route path="karty"             component={Cards}>
              <Route path="/karta/:idKarty" component={Cards} />
            </Route>
            <Route path="arena-picker"      component={ArenaPicker}>
              <Route path="czarnoksieznik"  component={PickedClass} />
              <Route path="druid"           component={PickedClass} />
              <Route path="kaplan"          component={PickedClass} />
              <Route path="lotr"            component={PickedClass} />
              <Route path="lowca"           component={PickedClass} />
              <Route path="mag"             component={PickedClass} />
              <Route path="paladyn"         component={PickedClass} />
              <Route path="szaman"          component={PickedClass} />
              <Route path="wojownik"        component={PickedClass}/>
            </Route>
            <Route path="dodatki"           component={Expansions}>
              <Route path=":expansion"      component={ExpansionOverview}>
                <Route path=":details"      component={ExpansionContent} />
              </Route>
            </Route>
            <Route path="przygody"              component={Adventures}>
              <Route path=":adventure"          component={AdventureContent}>
                <Route path="karty"             component={AdventureCards}/>
                <Route path="koszt"             component={AdventureCost}/>
                <Route path="struktura"         component={AdventureStructure}/>
                <Route path="bossy"             component={AdventureBosses}>
                  <Route path=":bossy"          component={BossGuide}/>
                </Route>
                <Route path="wyzwania-klasowe"  component={AdventureClassChallanges}/>
              </Route>
            </Route>
            <Route path="stworz-talie-kart" component={CreateDeck} />
            <Route path="forum"             component={Forum} />
            <Route path="turnieje"          component={Tournaments} />
            <Route path="streamerzy"        component={Streams} />
          </Route>
        </Router>
    );
  }
}

export default App;