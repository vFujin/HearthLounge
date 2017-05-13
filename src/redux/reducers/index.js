import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import Users from './users';
import Cards from './cards';
import DeckDetails from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';
import DeckCreationFilters from './filters';
import DeckList from './decks/load-decks';
import DeckListFilters from './filters';

const rootReducer = combineReducers({
  users: Users,
  cards: Cards,
  deckDetails: DeckDetails,
  deckCreation: DeckCreation,
  deckCreationFilters: DeckCreationFilters,
  deckList: DeckList,
  deckListFilters: DeckListFilters,
  routing: routerReducer
});

export default rootReducer;