import {firebaseAuth} from "../../../keys";
import {error, success} from "../../../utils/messages";

export function resetPassword(email){
  firebaseAuth().sendPasswordResetEmail(email).then(()=>{
    success('E-mail has been sent')
  }).catch((err) =>{
    error(err, 6)
  })
}