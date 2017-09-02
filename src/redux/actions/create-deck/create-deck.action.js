import {
  EDIT_DECK,
  SHOW_DECK_EDITING_TOOL,
  SIMPLIFY_DECK,
  TOGGLE_DECK_MECHANICS,
  TOGGLE_FILTERS,
  TOGGLE_IMG_READY_DECKLIST,
  UPDATE_CURRENT_CARDS_LOADED, UPDATE_DECK_CREATION_FILTERS,
  UPDATE_DECKSTRING, UPDATE_PLAYERCLASS,
  UPDATE_IMPORTED_DECKSTRING,
  TOGGLE_IMPORTED_DECKSTRING_POPOVER,
  TOGGLE_SEARCH_BOX,
  CARD_SEARCH_VALUE,
  FILTER_CARDS
} from "../../types/create-deck/create-deck";

export function toggleFilters(filters){
  return {
    type: TOGGLE_FILTERS,
    filters
  }
}

export function showDeckEditingTool(editingTool){
  return {
    type: SHOW_DECK_EDITING_TOOL,
    editingTool
  }
}

export function toggleDeckMechanics(deckMechanics){
  return {
    type: TOGGLE_DECK_MECHANICS,
    deckMechanics
  }
}

export function toggleImgReadyDecklist(imgReadyDecklist){
  return {
    type: TOGGLE_IMG_READY_DECKLIST,
    imgReadyDecklist
  }
}

export function editDeck(deck){
  return {
    type: EDIT_DECK,
    deck
  }
}

export function updateDeckstring(deckstring){
  return {
    type: UPDATE_DECKSTRING,
    deckstring
  }
}

export function simplifyDeck(simplifiedDeck){
  return {
    type: SIMPLIFY_DECK,
    simplifiedDeck
  }
}

export function updatePlayerClass(playerClass){
  return {
    type: UPDATE_PLAYERCLASS,
    playerClass
  }
}

export function updateCurrentCardsLoaded(currentCardsLoaded){
  return {
    type: UPDATE_CURRENT_CARDS_LOADED,
    currentCardsLoaded
  }
}

export function updateDeckCreationFilters(deckCreationFilters){
  return {
    type: UPDATE_DECK_CREATION_FILTERS,
    deckCreationFilters
  }
}

export function updateImportedDeckstring(importedDeckstring){
  return {
    type: UPDATE_IMPORTED_DECKSTRING,
    importedDeckstring
  }
}

export function toggleImportedDeckstringPopover(importedDeckstringPopover){
  return {
    type: TOGGLE_IMPORTED_DECKSTRING_POPOVER,
    importedDeckstringPopover
  }
}

export function toggleSearchBox(searchBox){
  return {
    type: TOGGLE_SEARCH_BOX,
    searchBox
  }
}

export function updateCardSearchValue(cardSearchValue){
  return {
    type: CARD_SEARCH_VALUE,
    cardSearchValue
  }
}

export function filterCards(filteredCards){
  return {
    type: FILTER_CARDS,
    filteredCards
  }
}