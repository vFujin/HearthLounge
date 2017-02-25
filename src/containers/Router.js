import React, { Component } from 'react';

import { Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router';
import {Home} from './pages/home/home';

import {Cards} from './pages/cards/cards';
import {ServiceCards} from './pages/cards/right-container/service.cards';


import {CreateDeck} from './pages/create-deck/create-deck';
import {Forum} from './pages/forum/forum';
import {Tournaments} from './pages/tournaments/tournaments';
import {Streams} from './pages/streams/streams';

import {Decks} from './pages/decks/deck-selection/decks';
import {Deck} from './pages/decks/deck/deck';
import {DeckSidebar} from './pages/decks/deck/sidebar';
import {DeckTopbar} from './pages/decks/deck/topbar';
import {DeckSelection} from "./pages/decks/deck-selection/deck-selection";
import {DeckSelectionSidebar} from "./pages/decks/deck-selection/sidebar";
import {DeckSelectionTopbar} from "./pages/decks/deck-selection/topbar";

import {ArenaPicker} from './pages/arena-picker/arena-picker';
import {ClassSelection} from './pages/arena-picker/class-selection';
import {PickedClass} from './pages/arena-picker/picked-class/right-container/choosen-class-view';

import {Expansions} from './pages/expansions/expansions';
import {Expansion} from './pages/expansions/right-container/expansion';
import {ExpansionDetails} from './pages/expansions/right-container/details';



import {Adventures} from './pages/adventures/adventures';
import {Adventure} from './pages/adventures/right-container/adventure';
import {AdventureDetails} from './pages/adventures/right-container/details';
import {AdventureBosses} from './pages/adventures/assets/bosses';
import {AdventureBoss} from './pages/adventures/assets/adventure-boss';


import {ChoosenClassView} from './pages/create-deck/picked-class/right-container/choosen-class-selection/choosen-class-view';

import {NotFound} from './shared-assets/not-found';

// import {Dashboard} from './pages/dashboard/dashboard';

import {Main} from './Main';



export class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/"                   component={Main} >
            <IndexRoute                     component={Home} />
            <Redirect from="home" to="/" />
            <Route path=""                  component={Home} />


            <Route path="decks"             component={Decks}>
              <Redirect from="all/:class" to="decks/:class"/>
              <Route path="all"             components={{main: DeckSelection, sidebar: DeckSelectionSidebar, topbar: DeckSelectionTopbar}}/>
              <Route path=":class/:deckId"  components={{main: Deck, sidebar: DeckSidebar, topbar: DeckTopbar}}/>
            </Route>

            {/*<Redirect from="cards" to="cards/all" />*/}
            <Route path="cards"                 component={Cards}>
              <Route path="all"             component={ServiceCards}/>
              <Route path="cards/(:?)"               component={ServiceCards}>
              </Route>
            </Route>

            <Redirect from="arena-picker" to="arena-picker/class-selection" />
            <Route path="arena-picker"      component={ArenaPicker}>
              <Route path="class-selection" component={ClassSelection} />
              <Route path=":class"          component={PickedClass} />
            </Route>

            <Route path="expansions"        component={Expansions}>
              <Redirect from=":expansion" to=":expansion/overview"/>
              <Route path=":expansion"      component={Expansion}>
                <Route path=":details"      component={ExpansionDetails} />
              </Route>
            </Route>

            <Route path="adventures"    component={Adventures}>
              <Redirect from=":adventure" to=":adventure/overview"/>
              <Route path=":adventure"  component={Adventure}>

                <Route path=":details"  component={AdventureDetails}>
                  <Route path="bosses"  component={AdventureBosses}/>
                  <Route path=":boss"   component={AdventureBoss}/>

                </Route>
                <Route path="*" component={NotFound} />
              </Route>
            </Route>

            <Route path="create-deck"       component={CreateDeck}>
              <Route path=":class"          component={ChoosenClassView} />
            </Route>

            <Route path="forum"             component={Forum} />
            <Route path="tournaments"       component={Tournaments} />
            <Route path="streamers"         component={Streams} />
            {/*<Route path="logowanie"         component={} />*/}
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
    );
  }
}
export default App;