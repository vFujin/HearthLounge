import {SELECT_EXPANSION, SELECT_EXPANSION_DETAILS} from '../actions/expansions'

const INITIAL_STATE = {
  //Sidebar
  preSelected: 'displayBlock',
  expansionOverview: 'displayBlock',
  selected: 'displayNone',
  expansion: 'displayBlock',
  selectedExpansionClass: null,

  //CardsTopbarFilters
  topbarActiveTab: '',
  topbarActiveTabUrl: '',
  sidebarActiveTab: '',
  details: 'displayNone'
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case SELECT_EXPANSION:
      console.log(action.type, action.expansion);
      return action.expansion;
    case SELECT_EXPANSION_DETAILS:
      return action.expansion_details;
    default: return state;
  }
}