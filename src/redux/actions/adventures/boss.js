import {FETCH_ADVENTURE_DECKS} from "../../types/adventures/boss";

export function fetchAdventureDecks(decks){
  return {
    type: FETCH_ADVENTURE_DECKS,
    decks
  }
}