import * as types from "../types/create-deck";

export function showDeckEditingTool(editingTool){
  return {
    type: types.SHOW_DECK_EDITING_TOOL,
    editingTool
  }
}

export function toggleDeckMechanics(deckMechanics){
  return {
    type: types.TOGGLE_DECK_MECHANICS,
    deckMechanics
  }
}

export function toggleImgReadyDecklist(imgReadyDecklist){
  return {
    type: types.TOGGLE_IMG_READY_DECKLIST,
    imgReadyDecklist
  }
}

export function editDeck(deck){
  return {
    type: types.EDIT_DECK,
    deck
  }
}

export function updateDeckstring(deckstring){
  return {
    type: types.UPDATE_DECKSTRING,
    deckstring
  }
}

export function simplifyDeck(simplifiedDeck){
  return {
    type: types.SIMPLIFY_DECK,
    simplifiedDeck
  }
}

export function updatePlayerClass(playerClass){
  return {
    type: types.UPDATE_PLAYERCLASS,
    playerClass
  }
}

export function updateImportedDeckstring(importedDeckstring){
  return {
    type: types.UPDATE_IMPORTED_DECKSTRING,
    importedDeckstring
  }
}

export function toggleImportedDeckstringPopover(importedDeckstringPopover){
  return {
    type: types.TOGGLE_IMPORTED_DECKSTRING_POPOVER,
    importedDeckstringPopover
  }
}

export function changeActiveCreateDeckMobileTab(tab){
  return {
    type: types.CHANGE_ACTIVE_CREATE_DECK_MOBILE_TAB,
    tab
  }
}