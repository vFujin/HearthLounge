import {success, error} from '../../../../utils/messages';

/**
 * On update complete function
 *
 * @param {object} err - throws firebase error
 */
export const onComplete = (err) => {
  if(err){
    error("Couldn't update your profile. Try again later.")
  } else {
    success("Profile has been updated successfully!")
  }
};