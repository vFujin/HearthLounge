import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Entry from './entry/entry'
import Users from './users';
import Cards from './cards';
import DeckDetails from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';
import DeckCreationFilters from './filters';
import DeckList from './decks/decks';
import DeckView from './decks/deck-view';
import RedditPosts from './reddit/posts'

const rootReducer = combineReducers({
  entry: Entry,
  users: Users,
  cards: Cards,
  deckDetails: DeckDetails,
  deckCreation: DeckCreation,
  deckCreationFilters: DeckCreationFilters,
  deckList: DeckList,
  deckView: DeckView,
  redditPosts: RedditPosts,
  routing: routerReducer
});


export default rootReducer;