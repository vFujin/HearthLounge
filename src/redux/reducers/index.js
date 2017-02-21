import {combineReducers} from 'redux';
import NavbarReducer from './navbar/navitems';
import NavbarSelectedClassReducer from './navbar/index';

import ExpansionReducer from './expansions';

//Adventure
import AdventureReducer from './adventure/sidebar';
import AdventureDetailsReducer from './adventure/details';
import AdventureActiveBossReducer from './adventure/active-boss';

export const reducers = combineReducers({
  navbar: NavbarReducer,
  navbarSelectedClass: NavbarSelectedClassReducer,
  expansion: ExpansionReducer,
  //Adventure
  adventure: AdventureReducer,
  adventureDetails: AdventureDetailsReducer,
  adventureActiveBoss: AdventureActiveBossReducer,
});

export default reducers;