import {
  EDIT_DECK,
  SHOW_DECK_EDITING_TOOL,
  SIMPLIFY_DECK,
  TOGGLE_DECK_MECHANICS,
  TOGGLE_FILTERS,
  TOGGLE_IMG_READY_DECKLIST,
  UPDATE_CURRENT_CARDS_LOADED,
  UPDATE_DECKSTRING, UPDATE_PLAYERCLASS,
  UPDATE_URL
} from "../../types/create-deck";

export const toggleFilters = filters => {
  return {
    type: TOGGLE_FILTERS,
    filters
  }
};

export const showDeckEditingTool = editingTool => {
  return {
    type: SHOW_DECK_EDITING_TOOL,
    editingTool
  }
};

export const toggleDeckMechanics = deckMechanics => {
  return {
    type: TOGGLE_DECK_MECHANICS,
    deckMechanics
  }
};

export const toggleImgReadyDecklist = imgReadyDecklist => {
  return {
    type: TOGGLE_IMG_READY_DECKLIST,
    imgReadyDecklist
  }
};

export const updateURL = deckUrl => {
  return {
    type: UPDATE_URL,
    deckUrl
  }
};

export const editDeck = deck => {
  return {
    type: EDIT_DECK,
    deck
  }
};

export const updateDeckstring = deckstring => {
  return {
    type: UPDATE_DECKSTRING,
    deckstring
  }
};

export const simplifyDeck = simplifiedDeck => {
  return {
    type: SIMPLIFY_DECK,
    simplifiedDeck
  }
};

export const updatePlayerClass = playerClass => {
  return {
    type: UPDATE_PLAYERCLASS,
    playerClass
  }
};

export const updateCurrentCardsLoaded = currentCardsLoaded => {
  return {
    type: UPDATE_CURRENT_CARDS_LOADED,
    currentCardsLoaded
  }
};