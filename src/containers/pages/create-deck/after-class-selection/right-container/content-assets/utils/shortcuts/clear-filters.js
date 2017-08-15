import {resetFocus} from "../reset-focus";

export default function(e, toggleDeckFilters, toggleDeckMechanics, toggleSearchbox, filterCards, updateCardSearchValue){
  if((e.altKey && e.keyCode === 67) || e.keyCode === 27) {
    e.preventDefault();
    toggleDeckFilters(false);
    toggleDeckMechanics(false);
    toggleSearchbox(false);
    filterCards(null);
    updateCardSearchValue('');
    resetFocus();
  }
}