import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Home from './home';
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