import {combineReducers} from 'redux';
import {adventureReducer} from './reducers/adventures';

export const reducers = combineReducers({
  adventure: adventureReducer
});
export default reducers;