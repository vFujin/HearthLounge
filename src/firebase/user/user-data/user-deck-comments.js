import {ref} from '../../../keys';

export default function (uid, callback){
  return ref.child(`user-deck-comments/${uid}`).once("value", snapshot=>{
    callback(snapshot.value());
  })
}