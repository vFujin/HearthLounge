import {ADVENTURE_SELECTED, ADVENTURE_DETAILS_SELECTED, ADVENTURE_ACTIVE_BOSS} from '../../actions/adventure'

export default function (state = null, action) {
  switch(action.type){
    case ADVENTURE_SELECTED:
      return action.payload;
    case ADVENTURE_DETAILS_SELECTED:
      return action.payload;
    case ADVENTURE_ACTIVE_BOSS:
      return action.payload;
    default: return state;
  }
}