import {ref} from '../keys';

export function fetchUsers(callback) {
  return ref.once("value", (snapshot) => callback(snapshot.child(`users`).val()))
}