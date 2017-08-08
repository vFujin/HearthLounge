import {FETCH_BOSS_DECKS} from "../../types/adventures/boss";

export function fetchBossDecks(decks){
  return {
    type: FETCH_BOSS_DECKS,
    decks
  }
}