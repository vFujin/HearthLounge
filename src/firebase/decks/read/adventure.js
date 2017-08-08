import {refParent} from '../../../keys';
import {getSimplifiedUser} from "../../user/read/index";

export function foo(adventure, callback) {
  let decksRef = refParent('decks');
  let decks = {};
  let pageQuery = decksRef.orderByChild('adventure').equalTo(adventure);
  pageQuery.on('child_added', snapshot => {
    getSimplifiedUser(snapshot.val().authorId, username => callback(Object.assign(decks, {[snapshot.val().deckId]: Object.assign(snapshot.val(), username)})));
  })
}