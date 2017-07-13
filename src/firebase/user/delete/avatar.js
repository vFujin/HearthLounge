import {ref} from '../../../keys';
import {success, error} from '../../../utils/messages';

export default function (activeUser){
  return ref.child(`users/${activeUser.uid}`)
      .update({...activeUser, photoURL: null})
      .then(()=> success("Avatar has been deleted successfully!"),
            (err)=>error("Couldn't delete avatar. Try again later.")
      );
}