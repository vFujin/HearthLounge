import {combineReducers} from 'redux';
import NavbarReducer from './navbar/navitems';
import NavbarSelectedClassReducer from './navbar/index';

//Adventure
import AdventureReducer from './adventure/adventure';
import AdventureDetailsReducer from './adventure/details';
import AdventureActiveBossReducer from './adventure/active-boss';

export const reducers = combineReducers({
  navbar: NavbarReducer,
  navbarSelectedClass: NavbarSelectedClassReducer,
  //Adventure
  adventure: AdventureReducer,
  adventureDetails: AdventureDetailsReducer,
  adventureActiveBoss: AdventureActiveBossReducer
});

export default reducers;