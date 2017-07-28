import {ref} from '../../../keys';
import {success, error} from '../../../utils/messages';

/**
 * Deletes user avatar
 *
 * @param {object} activeUser - Currently logged user
 */
export default function (activeUser){
  return ref.child(`users/${activeUser.uid}`)
      .update({...activeUser, avatar: null})
      .then(()=> success("Avatar has been deleted successfully!"),
            (err)=>error("Couldn't delete avatar. Try again later.")
      );
}