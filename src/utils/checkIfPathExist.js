import {adventure_details} from '../data/adventure-details';
import {expansion_details} from '../data/expansion-details';

const data = (type) => type === "adventures" ? adventure_details : expansion_details;

/**
 * Checks if adventure exists
 *
 * @example hearthlounge.firebaseapp.io/adventures/naxxramas
 * adventurePath -> naxxramas
 *
 * @param {string} adventurePath - adventure path taken from url
 * @returns {boolean}
 */
export const adventureExists = (adventurePath) =>{
  return adventure_details
         .map(adventure => adventure.url)
         .includes(adventurePath);
};

/**
 * Checks if adventure wing exists
 *
 * @example hearthlounge.firebaseapp.io/adventures/naxxramas/the-arachnid-quarter
 * adventurePath -> naxxramas
 * detailsPath   -> the-arachnid-quarter
 *
 * @param {string} type
 * @param {string} adventurePath - adventure path taken from url
 * @param {string} detailsPath - adventure details path taken from url
 * @returns {boolean}
 */
export const adventureWingExists = (type, adventurePath, detailsPath) => {
  const adventureExists = data(type).find(adventure => adventure.url === adventurePath);
  if (adventureExists.hasOwnProperty('wings')) {
    return adventureExists.wings.details
        .map(wing => wing.url)
        .includes(detailsPath);
  }
};

/**
 * Checks if adventure wing exists AND if boss exists in particular wing
 *
 * @example hearthlounge.firebaseapp.io/adventures/naxxramas/the-arachnid-quarter/maexxna
 * adventurePath -> naxxramas
 * detailsPath   -> the-arachnid-quarter
 * bossPath      -> maexxna
 *
 * @param {string} type
 * @param {string} adventurePath - adventure path taken from url
 * @param {string} detailsPath - adventure details path taken from url
 * @param {string} bossPath - adventure details boss path taken from url
 * @returns {boolean}
 */
export const adventureBossExists = (type, adventurePath, detailsPath, bossPath) => {
  const adventureExists = data(type).find(adventure => adventure.url === adventurePath);
  if(adventureExists.hasOwnProperty('wings')) {
    return adventureExists.wings.details
          .filter(wing => wing.url === detailsPath)
          .map(wing => wing.bosses)[0]
          .map(boss => boss.url)
          .includes(bossPath)
  }
};

/**
 * Checks if expansion exists
 *
 * @example hearthlounge.firebaseapp.io/expansions/goblins-vs-gnomes
 * expansionPath -> goblins-vs-gnomes
 *
 * @param {string} expansionPath - expansion path taken from url
 * @returns {boolean}
 */
export const expansionExists = (expansionPath) =>
    expansion_details
        .map(expansion => expansion.url)
        .includes(expansionPath);

/**
 * Checks if expansion detail exists
 *
 * @example hearthlounge.firebaseapp.io/expansions/goblins-vs-gnomes/overview
 * expansionPath -> goblins-vs-gnomes
 * detailsPath   -> overview
 *
 *
 * @param {string} expansionPath - expansion path taken from url
 * @param {string} detailsPath - expansion details path taken from url
 * @returns {boolean}
 */

export const expansionDetailExists = (expansionPath, detailsPath) =>
    expansion_details
        .find(expansion => expansion.url === expansionPath).expansion_topbar_tabs
        .map(expansion => expansion.url).includes(detailsPath);
