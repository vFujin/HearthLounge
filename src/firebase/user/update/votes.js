import {refUpdate} from "../utils";
import {refParent} from "../../../keys";

/**
 * Updates user's vote
 *
 * @param {string} selector - Firebase database reference (i.e `ref.child(${user-decks}`)
 * @param uid
 * @param deckId
 * @param {string} vote - Vote type (upvote / downvote)
 * @param {function} callback - Callbacks `vote`
 * @returns {*}
 */

export default function (selector, uid, deckId, vote, callback) {
  refParent(selector).once('value', snapshot=>{
    if(snapshot.val() && snapshot.val()[deckId] === vote){
      return refUpdate(selector, {[deckId]: null})
    } else {
      return refUpdate(selector, {[deckId]: vote})
    }
  })
}
