import { ref } from '../../../keys';
import { success, error } from '../../../utils/messages';
import history from '../../../globals/history';

/**
 * Updates User's username (if it wasn't set yet)
 *
 * @param {object} activeUser - Currently logged user
 * @param {string} username - User's username
 * @param {function} updateSignUpStatus - updates sign up phase 2 progress bar state
 */
export default function(activeUser, username, avatar, updateSignUpStatus) {
  if (!activeUser.updatedProfile) {
    let updatedUsername = {
      ...activeUser,
      username,
      avatar: avatar ? avatar : null,
      updatedProfile: true,
    };

    let updates = {};
    updates[`users/${activeUser.uid}`] = updatedUsername;
    updates[`usernames/${username}`] = activeUser.uid;

    return ref.update(updates, function(err) {
      if (err) {
        updateSignUpStatus('success', 'failure');
        error("Something's not quite right. Try again later.", 4);
      } else {
        updateSignUpStatus('success', 'success');
        success('Profile has been updated!');
        if (history.location.pathname === '/sign-up/update-profile') {
          history.push('/sign-up/update-profile/complete');
        }
      }
    });
  } else
    error(
      'Your profile has been already updated. You can update your profile in your dashboard',
      10
    );
}
