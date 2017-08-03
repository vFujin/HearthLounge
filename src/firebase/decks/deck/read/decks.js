import {refParent} from '../../../../keys';
import {getSimplifiedUser} from "../../../user/read/index";
export default function (callback) {
  let decksRef = refParent('decks');
  let pageQuery = decksRef.orderByChild('votes').limitToLast(10);
  let decks = {};

  pageQuery.on('child_added', snapshot => {
    getSimplifiedUser(snapshot.val().authorId, username =>  Object.assign(decks, {[snapshot.val().deckId]: Object.assign(snapshot.val(), username)}));

    callback(decks);
  })
}