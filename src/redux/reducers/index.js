import {combineReducers} from 'redux';

import UsersReducer from './users';
import DeckOptions from './create-deck/deck-options';

const rootReducer = combineReducers({
  users: UsersReducer,
  deckOptions: DeckOptions,
});

export default rootReducer;