// just an idea to automate stuff with your reducers
// you can use glob
// https://www.npmjs.com/package/glob

// const reducers = glob.sync('./**/*.js).map((e) => e.split('/').splice(-1))
// export default combineReducers(...reducers)

// map to return the file name and use it as the property for your root reducers


import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Home from './home';
import CurrentHsPatch from './current-hs-patch';
import Entry from './entry/entry'
import Users from './users';
import Cards from './cards';
import Issues from './issues';
import Expansions from './expansions/expansions';
import Adventures from './adventures/adventure'
import DeckDetails from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';
import DeckList from './decks/decks';
import DeckView from './decks/deck-view';
import RedditPosts from './reddit/posts'

const rootReducer = combineReducers({
  home: Home,
  patch: CurrentHsPatch,
  entry: Entry,
  users: Users,
  cards: Cards,
  expansions: Expansions,
  adventures: Adventures,
  deckDetails: DeckDetails,
  deckCreation: DeckCreation,
  deckList: DeckList,
  deckView: DeckView,
  redditPosts: RedditPosts,
  issues: Issues,
  routing: routerReducer
});


export default rootReducer;
