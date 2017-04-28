import {combineReducers} from 'redux';

import UsersReducer from './users';
import DeckOptions from './create-deck/deck-options';
import DeckCreation from './create-deck/create-deck';

const rootReducer = combineReducers({
  users: UsersReducer,
  deckOptions: DeckOptions,
  deckCreation: DeckCreation
});

export default rootReducer;