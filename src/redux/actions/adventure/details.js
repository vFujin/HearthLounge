import {ADVENTURE_SELECTED, ADVENTURE_DETAILS_SELECTED, ADVENTURE_ACTIVE_BOSS} from './adventure'

const INITIAL_STATE = {
  //Sidebar
  preSelected: 'displayBlock',
  adventureOverview: 'displayBlock',
  selected: 'displayNone',
  adventure: 'displayNone',
  selectedAdventureUrl: null,

  //Topbar
  topbarActiveTab: '',
  topbarActiveTabUrl: '',
  sidebarActiveTab: null,
  details: 'displayNone',

  //Bosses
  activeBoss: null,
  activeBossUrl: null,
  activeBossImg: null,
  activeTableView: 'displayBlock',
  activeBossView: 'displayNone'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADVENTURE_SELECTED:
      return action.payload;
    case ADVENTURE_DETAILS_SELECTED:
      return action.payload;
    case ADVENTURE_ACTIVE_BOSS:
      return action.payload;
  }
}
