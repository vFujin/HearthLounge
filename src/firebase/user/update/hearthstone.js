import {ref} from '../../../keys';

export default function (uid, battletag, favourite_class, region){
  return ref.child(`users/${uid}`).update({
    battletag,
    favourite_class,
    region
  });
}
