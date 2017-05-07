import {ref} from '../keys';

export function fetchDecks(callback) {
  return ref.once("value", (snapshot) => callback(snapshot.child(`decks`).val()))
}