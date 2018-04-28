import {isEmpty, refUpdate} from '../utils/';

/**
 * Updates user's social media details
 *
 * @param {string} uid - User ID
 * @param {string} facebook - User's facebook profile
 * @param {string} twitter - User's twitter profile
 * @param {string} twitch - User's twitch profile
 * @param {string} youtube - User's youtube profile
 */
export default function (uid, facebook, twitter, twitch, youtube){
  let updates = {
    facebook: isEmpty(String(facebook)),
    twitter: isEmpty(String(twitter)),
    twitch: isEmpty(String(twitch)),
    youtube: isEmpty(String(youtube))
  };

  return refUpdate(`users/${uid}`, updates);
}