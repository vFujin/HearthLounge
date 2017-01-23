import {ACTIVE_ADVENTURE, ACTIVE_ADVENTURE_DETAILS, ACTIVE_BOSS} from '../actions/adventures/adventures';

const initialState = {
  //Sidebar - active adventure
  preSelected: 'displayBlock',
  adventureOverview: 'displayBlock',
  selected: 'displayNone',
  adventure: 'displayNone',
  selectedAdventureUrl: null,

  //Topbar - active adventure details
  topbarActiveTab: '',
  topbarActiveTabUrl: '',
  sidebarActiveTab: null,
  details: 'displayNone',

  //Boss - active boss
  activeBoss: null,
  activeBossUrl: null,
  activeBossImg: null,
  activeTableView: 'displayBlock',
  activeBossView: 'displayNone'
};

export const adventureReducer = (state={initialState}, action) => {
  switch(action.type){
    case ACTIVE_ADVENTURE: {
      state = {
        ...state,
        preSelected: 'displayNone',
        adventureOverview: 'displayNone',
        selected: 'displayBlock',
        adventure: 'displayBlock',
        selectedAdventureUrl: null,
      };
      break;
    }
    case ACTIVE_ADVENTURE_DETAILS: {
      state = {
        ...state,
        topbarActiveTab: '',
        topbarActiveTabUrl: '',
        sidebarActiveTab: null,
        details: 'displayNone',
      };
      break;
    }
    case ACTIVE_BOSS: {
      state = {
        ...state,
        activeBoss: null,
        activeBossUrl: null,
        activeBossImg: null,
        activeTableView: 'displayBlock',
        activeBossView: 'displayNone'
      };
      break;
    }
    default: {
      break;
    }
  }
  return state;
};