import {ref} from '../../keys';

// export function fetchPostAnswers(parentSelector, elementId, uid, dataToExtract, callback){
//   ref.child(`${parentSelector}/${elementId}`)
//       .once("value",snapshot => {
//         let arr = [];
//         snapshot.forEach(childSnapshot => {
//           let child = childSnapshot.val();
//           arr.push(dataToExtract(child));
//         });
//         callback(arr)
//       });
// }
//
// export function fetchSingle(deckId, commentId, callback, uid){
//   ref.child(`deck-comments/${deckId}/${commentId}`)
//       .on("value", snapshot => {
//         if(snapshot.val() !== null && uid) {
//           callback({
//             upvotes: snapshot.val().upvotes,
//             downvotes: snapshot.val().downvotes,
//             votes: snapshot.val().votes,
//             id: snapshot.val().id,
//             voteType: snapshot.val()[uid]
//           });
//         }
//       })
//
// }