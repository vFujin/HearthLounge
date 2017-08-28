import {FETCH_EXPANSION_DECKS} from "../../types/expansions";

export function fetchAdventureDecks(decks){
  return {
    type: FETCH_EXPANSION_DECKS,
    decks
  }
}