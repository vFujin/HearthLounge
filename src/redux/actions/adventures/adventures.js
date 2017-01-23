export const ACTIVE_ADVENTURE = 'ACTIVE_ADVENTURE';
export const ACTIVE_ADVENTURE_DETAILS = 'ACTIVE_ADVENTURE_DETAILS';
export const ACTIVE_BOSS = 'ACTIVE_BOSS';

export function showAdventure(){
  return { type: ACTIVE_ADVENTURE }
}

export function showAdventureDetails(){
  return { type: ACTIVE_ADVENTURE_DETAILS }
}

export function showBossDetails(){
  return { type: ACTIVE_BOSS }
}