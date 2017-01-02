import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './layout/App';
import {Home} from './pages/home/home';
import {Decks} from './pages/decks/decks';
import {Cards} from './pages/cards/cards';
import {ArenaPicker} from './pages/arena-picker/arena-picker';
import {Expansions} from './pages/expansions/expansions';
import {Adventures} from './pages/adventures/adventures';
import {CreateDeck} from './pages/create-deck/create-deck';
import {Forum} from './pages/forum/forum';
import {Tournaments} from './pages/tournaments/tournaments';
import {Streams} from './pages/streams/streams';

import {DeckWarlock} from './pages/decks/warlock';
import {DeckDruid} from './pages/decks/druid';
import {DeckPriest} from './pages/decks/priest';
import {DeckRogue} from './pages/decks/rogue';
import {DeckHunter} from './pages/decks/hunter';
import {DeckMage} from './pages/decks/mage';
import {DeckPaladin} from './pages/decks/paladin';
import {DeckShaman} from './pages/decks/shaman';
import {DeckWarrior} from './pages/decks/warrior';

import {PickedClass} from './pages/arena-picker/picked-class';

import {GoblinsVsGnomes} from './pages/expansions/goblins-vs-gnomes';
import {MeanStreetsOfGadgetzan} from './pages/expansions/mean-streets-of-gadgetzan';
import {TheGrandTournament} from './pages/expansions/the-grand-tournament';
import {WhispersOfTheOldGods} from './pages/expansions/whispers-of-the-old-gods';

import './styles/index.css';
import './styles/mobile.css';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/"                   component={App}>
        <IndexRoute                     component={Home} />
        <Route path="strona-glowna"     component={Home} />
        <Route path="talie-kart"        component={Decks}>
          <Route path="czarnoksieznik"  component={DeckWarlock} />
          <Route path="druid"           component={DeckDruid} />
          <Route path="kaplan"          component={DeckPriest} />
          <Route path="lotr"            component={DeckRogue} />
          <Route path="lowca"           component={DeckHunter} />
          <Route path="mag"             component={DeckMage} />
          <Route path="paladyn"         component={DeckPaladin} />
          <Route path="szaman"          component={DeckShaman} />
          <Route path="wojownik"        component={DeckWarrior} />
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
          <Route path="wojownik"        component={PickedClass} />
        </Route>
        <Route path="dodatki"           component={Expansions}>
          <Route path="gobliny-kontra-gnomy"     component={GoblinsVsGnomes} />
          <Route path="wielki-turniej"           component={TheGrandTournament} />
          <Route path="przedwieczni-bogowie"     component={WhispersOfTheOldGods} />
          <Route path="ciemne-zaulki-gadzetonu"  component={MeanStreetsOfGadgetzan} />
        </Route>
        <Route path="przygody"          component={Adventures}>
          <Route path="klatwa-naxxramas"          component={CurseOfNaxxramas} />
          <Route path="czarna-gora"               component={BlackrockMountain} />
          <Route path="liga-odkrywcow"            component={TheLeagueOfExplerores} />
          <Route path="pewnej-nocy-w-karazhanie"  component={OneNightAtKarazhan} />
        </Route>
        <Route path="stworz-talie-kart" component={CreateDeck} />
        <Route path="forum"             component={Forum} />
        <Route path="turnieje"          component={Tournaments} />
        <Route path="streamerzy"        component={Streams} />
      </Route>
    </Router>

), document.getElementById('root'));