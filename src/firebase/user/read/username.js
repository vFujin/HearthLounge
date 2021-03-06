import {refParent} from '../../../keys';

/**
 * Finds username based on user input
 *
 * @param {string} input - User input
 * @param {function} callback
 * @return {boolean} returns true if username exists or false if it doesn't
 */
export default function (input, callback) {
  return refParent('usernames').once("value", (snapshot) => callback(snapshot.child(input).exists()));
}