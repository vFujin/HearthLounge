import {combineReducers} from 'redux';
import NavbarReducer from './navbar/navitems';
import NavbarSelectedClassReducer from './navbar/index';

export const reducers = combineReducers({
  navbar: NavbarReducer,
  navbarSelectedClass: NavbarSelectedClassReducer
});

export default reducers;