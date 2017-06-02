import React from 'react';
import {syncHistoryWithStore} from 'react-router-redux';
import { Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router';

import {Home} from './pages/home/home';

import Cards from './pages/cards/cards';
import {Forum} from './pages/forum/forum';
import {Tournaments} from './pages/tournaments/tournaments';


import DeckSelection from "./pages/decks/deck-selection/deck-selection";
import Deck from './pages/decks/deck/deck';

import {ArenaPicker} from './pages/arena-picker/arena-picker';
import {ArenaPickerClassSelection} from './pages/arena-picker/class-selection';
import {ArenaPickerClassSelected} from './pages/arena-picker/class-selected';

import Expansions from './pages/expansions/expansions';
import {Expansion} from './pages/expansions/right-container/expansion';
import ExpansionDetails from './pages/expansions/right-container/details';

import Adventures from './pages/adventures/adventures';
import Adventure from './pages/adventures/right-container/adventure';
import {AdventureDetails} from './pages/adventures/right-container/details';
import AdventureBosses from './pages/adventures/assets/bosses';
import AdventureBoss from './pages/adventures/assets/adventure-boss';

import CreateDeck from './pages/create-deck/create-deck';
import CreateDeckClassSelection from './pages/create-deck/before-class-selection/class-selection';
import CreateDeckClassSelected from './pages/create-deck/after-class-selection/create-deck';

import {Streams} from './pages/streams/streams';
import Iframe from './pages/streams/iframe';


import {Reddit} from './pages/reddit/reddit';
import RedditPost from './pages/reddit/post/post';
import {RedditPostSidebar} from './pages/reddit/post/sidebar';
import {RedditPostTopbar} from './pages/reddit/post/topbar';
import RedditPosts from './pages/reddit/posts/posts';
import {RedditPostsSidebar} from './pages/reddit/posts/sidebar';
import RedditPostsTopbar from './pages/reddit/posts/topbar';

import {Login} from './pages/login/login';
import SignUp from './pages/login/sign-up';
import SignIn from './pages/login/sign-in';

import NotFound from './shared-assets/not-found';

import {Dashboard} from './pages/dashboard/dashboard';

import Main from './Main';


// getCurrentUserInfo(updateActiveUser);
const App = ({store}) =>{
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Router history={history}>
      <Route path="/"                   component={Main}>
        <IndexRoute                     component={Home} />
        <Redirect from="home" to="/" />
        <Route path=""                  component={Home} />

        <Route path="decks"             component={DeckSelection}>
          {/*<Route path=":class/:deckId"  component={Deck}/>*/}
          <Route path=":class/:deckId/:deckTitle"  component={Deck}/>
        </Route>

        <Route path="cards"             component={Cards} />

        <Redirect from="arena-picker" to="arena-picker/class-selection" />
        <Route path="arena-picker"      component={ArenaPicker}>
          <Route path="class-selection" component={ArenaPickerClassSelection} />
          <Route path=":class"          component={ArenaPickerClassSelected} />
        </Route>

        <Redirect from="expansion" to="expansions"/>
        <Route path="expansions"        component={Expansions}>
          <Redirect from=":expansion" to=":expansion/overview"/>
          <Route path=":expansion"      component={Expansion}>
            <Route path=":details"      component={ExpansionDetails} />
          </Route>
        </Route>

        <Redirect from="adventure" to="adventures"/>
        <Route path="adventures"    component={Adventures}>
          <Redirect from=":adventure" to=":adventure/overview"/>
          <Route path=":adventure"  component={Adventure}>
            <Route path=":details"  component={AdventureDetails}>
              <Route path="bosses"  component={AdventureBosses}/>
              <Route path=":boss"   component={AdventureBoss}/>
            </Route>
          </Route>
        </Route>

        <Redirect from="create-deck" to="create-deck/class-selection" />
        <Route path="create-deck"         component={CreateDeck}>
          <Route path="class-selection"   component={CreateDeckClassSelection} />
          <Route path=":class"            component={CreateDeckClassSelected} />

        </Route>

        <Route path="forum"             component={Forum} />
        <Route path="tournaments"       component={Tournaments} />

        <Redirect from="twitch" to="twitch/all" />
        <Route path="twitch"         component={Streams}>
          <Route path=":channel"         component={Iframe}/>
        </Route>

        <Redirect from="reddit" to="reddit/posts" />
        <Route path="reddit"              component={Reddit}>
          <Route path="posts"             components={{main: RedditPosts, sidebar: RedditPostsSidebar, topbar: RedditPostsTopbar}} />
          <Route path="post/:id/:post"    components={{main: RedditPost,  sidebar: RedditPostSidebar,  topbar: RedditPostTopbar}} />
          <Route path="post/:id"          components={{main: RedditPost,  sidebar: RedditPostSidebar,  topbar: RedditPostTopbar}} />
        </Route>

        <Route path="login"      component={Login}>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Route>

        <Route path="dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  );
};

export default App;