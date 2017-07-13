import {ref} from '../../../keys';

export default function (uid, facebook, twitter, twitch, youtube){
  return ref.child(`users/${uid}`).update({
    facebook,
    twitter,
    twitch,
    youtube
  });
}