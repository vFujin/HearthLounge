import {isEmpty, refUpdate} from '../utils/';

/**
 * Updates user's Hearthstone (+ Blizzard) related details
 *
 * @param {string} uid - User ID
 * @param {string} battletag - User's BattleTag / BlizzardTag; See: http://us.battle.net/en/battletag/
 * @param {string} favouriteClass - User's favourite class
 * @param {string} region - User's abbreviated region
 */
export default function (uid, battletag, favouriteClass, region){
  let updates = {
    battletag: isEmpty(battletag),
    favouriteClass: isEmpty(favouriteClass),
    region: isEmpty(region)
  };

  return refUpdate(`users/${uid}`, updates);
}
