import {firebaseAuth} from '../../../keys';

export default function (email, activeUser){
  let user = firebaseAuth().currentUser;
  user.updateEmail(email)
}