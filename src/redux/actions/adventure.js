export const ADVENTURE_SELECTED = 'ADVENTURE_SELECTED';
export const ADVENTURE_DETAILS_SELECTED = 'ADVENTURE_DETAILS_SELECTED';
export const ADVENTURE_ACTIVE_BOSS = 'ADVENTURE_DETAILS_SELECTED';

export function adventureSelected(adventure){
  return {
    type: ADVENTURE_SELECTED,
    payload: adventure
  }
}

export function adventureDetailsSelected(details){
  return {
    type: ADVENTURE_DETAILS_SELECTED,
    payload: details
  }
}

export function adventureActiveBoss(boss){
  return{
    type: ADVENTURE_ACTIVE_BOSS,
    payload: boss
  }
}

