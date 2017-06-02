import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Entry from './entry/entry'
import Users from './users';
import Cards from './cards';
import DeckDetails from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';
import DeckCreationFilters from './filters';
import DeckList from './decks/decks';
import DeckListFilters from './filters';
import DeckView from './decks/deck-view'

const rootReducer = combineReducers({
  entry: Entry,
  users: Users,
  cards: Cards,
  deckDetails: DeckDetails,
  deckCreation: DeckCreation,
  deckCreationFilters: DeckCreationFilters,
  deckList: DeckList,
  deckListFilters: DeckListFilters,
  deckView: DeckView,
  routing: routerReducer
});

export default rootReducer;