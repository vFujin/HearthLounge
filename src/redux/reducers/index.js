import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Home from './home';
import Entry from './entry/entry'
import Users from './users';
import Cards from './cards';
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
  deckDetails: DeckDetails,
  deckCreation: DeckCreation,
  deckList: DeckList,
  deckView: DeckView,
  redditPosts: RedditPosts,
  routing: routerReducer
});


export default rootReducer;