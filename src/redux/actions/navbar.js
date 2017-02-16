export const SUBMENU_ITEM_SELECTED = 'SUBMENU_ITEM_SELECTED';

export function navbarSelectedClass(hs_class){
  return {
    type: SUBMENU_ITEM_SELECTED,
    payload: hs_class
  }
}

