import {refParent} from '../../../keys';
import {getSimplifiedUser} from "../../user/read/index";

export function getAdventureDecks(adventure, callback) {
  let decksRef = refParent('decks');
  let decks = {};
  const assignDecks = (snapshot, author) => Object.assign(decks, {[snapshot.val().deckId]: Object.assign(snapshot.val(), {username: author.username})});
  let pageQuery = decksRef.orderByChild('adventure').equalTo(adventure);

  pageQuery.on('child_added', snapshot => {
    console.log("queries fb");
    getSimplifiedUser(snapshot.val().authorId, author => callback(assignDecks(snapshot, author)));
  });
}