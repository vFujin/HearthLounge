import {combineReducers, createStore} from 'redux';
import {adventureReducer} from './reducers/adventures';

const reducers = combineReducers({
  adventure: adventureReducer
});

const store = createStore(reducers);
console.log(store);