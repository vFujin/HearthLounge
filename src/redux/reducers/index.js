import {combineReducers} from 'redux';

import UsersReducer from './users';
import DeckDetails from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';
import DeckCreationFilters from './filters';
import DeckList from './decks/fetch-decks';
import DeckListFilters from './filters';

const rootReducer = combineReducers({
  users: UsersReducer,
  deckDetails: DeckDetails,
  deckCreation: DeckCreation,
  deckCreationFilters: DeckCreationFilters,
  deckList: DeckList,
  deckListFilters: DeckListFilters
});

export default rootReducer;