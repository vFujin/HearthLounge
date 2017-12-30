// import {ref, refParent, firestore} from "../../keys";

/**
 *  Updates `selector` votes via Firebase transaction method; See https://firebase.google.com/docs/database/web/read-and-write#save_data_as_transactions
 *
 * @param {string} collection - Cloud Firestore collection (i.e decks)
 * @param {string} doc - Cloud Firestore document (i.e deck id)
 * @param {string} uid - User ID
 * @param {string} vote - Vote type (upvote or downvote)
 */
export default function (collection, doc, uid, vote) {
  // const selectorRef = firestore.collection(collection).doc(doc).get();

  // console.log("foo", refParent(`${collection}/${doc}`).once("value").then(snapshot => console.log(snapshot.child(uid).exists())));

  // RTDB === Firebase's Realtime Database
  // return refParent(`user-deck-ratings/${doc}`).update(RTDB => {
  //   return firestore.runTransaction(transaction => {
  //     const upvote = "upvote";
  //     const downvote = "downvote";
  //     return transaction.get(selectorRef).then(doc => {
  //       if (doc.exists) {
  //         const cloudFirestoreDoc = doc.data();
  //         if (RTDB) {
  //           if (RTDB === upvote && vote === upvote) {
  //             transaction.update(selectorRef, {
  //               votes: cloudFirestoreDoc.votes--,
  //               upvotes: cloudFirestoreDoc.upvotes--
  //             });
  //             RTDB[uid] = null;
  //           }
  //
  //           else if (RTDB === downvote && vote === downvote) {
  //             transaction.update(selectorRef, {
  //               votes: cloudFirestoreDoc.votes++,
  //               downvotes: cloudFirestoreDoc.downvotes--
  //             });
  //             RTDB[uid] = null;
  //           }
  //
  //           else if (RTDB === upvote && vote === downvote) {
  //             transaction.update(selectorRef, {
  //               votes: cloudFirestoreDoc.votes -= 2,
  //               upvotes: cloudFirestoreDoc.upvotes--,
  //               downvotes: cloudFirestoreDoc.downvotes++
  //             });
  //             RTDB[uid] = downvote;
  //           }
  //
  //           else {
  //             transaction.update(selectorRef, {
  //               votes: cloudFirestoreDoc.votes += 2,
  //               upvotes: cloudFirestoreDoc.upvotes++,
  //               downvotes: cloudFirestoreDoc.downvotes--
  //             });
  //             RTDB[uid] = upvote;
  //           }
  //         }
  //
  //         else {
  //           RTDB[uid] = vote;
  //           RTDB[uid] === upvote ? transaction.update(selectorRef, {votes: cloudFirestoreDoc.votes++}) : transaction.update(selectorRef, {votes: cloudFirestoreDoc.votes--});
  //           RTDB[uid] === upvote ? transaction.update(selectorRef, {upvotes: cloudFirestoreDoc.upvotes++}) : transaction.update(selectorRef, {downvotes: cloudFirestoreDoc.downvotes++});
  //           if (!cloudFirestoreDoc.votes) {
  //             transaction.update(selectorRef, {votes: cloudFirestoreDoc.upvotes - cloudFirestoreDoc.downvotes});
  //           }
  //         }
  //       } else {
  //         console.log("Doc doesn't exist")
  //       }
  //     });
  //   }).then(() => console.log("end of the stream")).catch(err => console.log(err));
  // }).then(() => console.log("end of the stream via update")).catch(err => console.log(err));
};