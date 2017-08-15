import {resetFocus} from "../reset-focus";

export default function(e, searchBoxOpen, cardSearchValue, filteredCards, toggleSearchBox, updateCardSearchValue){
  if(searchBoxOpen && cardSearchValue !== '' && (!filteredCards || filteredCards.length !== 0) && e.keyCode === 13) {
    e.preventDefault();
    toggleSearchBox(false);
    updateCardSearchValue('');
    resetFocus();
  }
}