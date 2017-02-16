import {SUBMENU_ITEM_SELECTED} from '../../actions/navbar'

export default function (state = null, action) {
  switch(action.type){
    case SUBMENU_ITEM_SELECTED:
      return action.payload;
    default: return state;
  }
}