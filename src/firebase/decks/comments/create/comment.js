// import {ref} from '../../../../keys';
// import {success, error} from '../../../../utils/messages';
// import {updateCommentsCount} from "../../deck/update/index";
//
// /**
//  * Creates deck newComment.
//  *
//  * @param {string} patch - current patch version in Hearthstone
//  * @param {string} text - newComment text
//  * @param {string} deckId - deck id
//  * @param {string} uid - user id
//  */
// export function postComment(patch, text, deckId, uid, callback){
//   if(patch && text && deckId && uid){
//     const newCommentKey = ref.child(`decks/${deckId}/comments`).push().key;
//
//     let newComment = {
//       patch,
//       text,
//       authorId: uid,
//       created: +new Date(),
//       commentId: newCommentKey,
//       votes: 0,
//       upvotes: 0,
//       downvotes: 0
//     };
//
//     let updates = {};
//     updates[`/deck-comments/${deckId}/${newCommentKey}`] = newComment;
//     updates[`/user-deck-comments/${uid}/${deckId}/${newCommentKey}`] = newCommentKey;
//
//     return updates;
//   } else {
//     return error("Something's not quite right. Try again later.")
//   }
// }