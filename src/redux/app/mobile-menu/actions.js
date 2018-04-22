import * as types from './types';

export function toggleMobileMenu(payload){
  return {
    type: types.TOGGLE_MOBILE_MENU,
    payload
  }
}
