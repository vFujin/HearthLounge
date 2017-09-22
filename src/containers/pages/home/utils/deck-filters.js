import {getHotDecks} from "../../../../firebase/decks/deck/read/index";

export const isFilterActive = (filter, targetId, isActive, updateFilters) =>{
  if(isActive){
    updateFilters({[filter]: false});
  } else {
    updateFilters({[filter]: targetId});
  }
};

export const fetchFilteredDecks = (deckFilters, filter, targetId, updateDecks) => {
  const {playerClass, mode} = deckFilters;
  const mainFilter = () => (playerClass && filter === "mode") ? targetId : mode;
  const secondaryFilter = () => (mode && filter === "playerClass") ? targetId : playerClass;

  if (playerClass && mode) {
    getHotDecks(mainFilter(), null, secondaryFilter(), decks => updateDecks(decks));

  } else if ((!playerClass && filter === "playerClass") || (!mode && filter === "mode")) {
    getHotDecks(targetId, filter, false, decks => updateDecks(decks));
  } else {
    getHotDecks(false, null, false, decks => updateDecks(decks));
  }

};