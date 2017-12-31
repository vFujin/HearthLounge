import {
  EDIT_DECK,
  SHOW_DECK_EDITING_TOOL,
  SIMPLIFY_DECK,
  TOGGLE_DECK_MECHANICS,
  TOGGLE_IMG_READY_DECKLIST,
  UPDATE_DECKSTRING, UPDATE_PLAYERCLASS,
  UPDATE_IMPORTED_DECKSTRING,
  TOGGLE_IMPORTED_DECKSTRING_POPOVER,
} from "../types/create-deck";

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