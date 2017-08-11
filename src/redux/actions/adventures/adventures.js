import {FETCH_ADVENTURE_DECKS, FETCH_CARDBACKS, UPDATE_ADVENTURE_CARDBACKS} from "../../types/adventures/boss";

export function fetchAdventureDecks(decks){
  return {
    type: FETCH_ADVENTURE_DECKS,
    decks
  }
}

export function fetchCardbacks(cardbacks){
  return {
    type: FETCH_CARDBACKS,
    cardbacks
  }
}

export function updateAdventureCardbacks(adventureCardbacks){
  return {
    type: UPDATE_ADVENTURE_CARDBACKS,
    adventureCardbacks
  }
}