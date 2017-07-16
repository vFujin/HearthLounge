import {ref} from '../../../keys';

/**
 * Updates user's Hearthstone (+ Blizzard) related details
 *
 * @param {string} uid - User ID
 * @param {string} battletag - User's BattleTag / BlizzardTag; See: http://us.battle.net/en/battletag/
 * @param {string} favourite_class - User's favourite class
 * @param {string} region - User's abbreviated region
 */
export default function (uid, battletag, favouriteClass, region){
  return ref.child(`users/${uid}`).update({
    battletag,
    favouriteClass,
    region
  });
}
