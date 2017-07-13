import {firebaseAuth} from '../../../keys';
import {success, error} from '../../../utils/messages';

export default function (password){
  let user = firebaseAuth().currentUser;
  let credential = firebaseAuth.EmailAuthProvider.credential(user.email, password);
  user.reauthenticateWithCredential(credential).then( ()=> {
    success("You have been reauthenticated successfully!");
  }, ()=>{
    error("Couldn't reauthenticate. Try again later.")
  })
}
