import {ADVENTURE_ACTIVE_BOSS} from '../../actions/adventure/adventure'

const INITIAL_STATE = {
  activeBoss: null,
  activeBossUrl: null,
  activeBossImg: null,
  activeTableView: 'displayBlock',
  activeBossView: 'displayNone'
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type){
    case ADVENTURE_ACTIVE_BOSS:
      return action.payload;
    default: return state;
  }
}