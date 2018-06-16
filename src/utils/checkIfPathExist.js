import {extension_details} from '../globals/extension-details';

/**
 * Checks if adventure wing exists
 *
 * @example hearthlounge.firebaseapp.io/adventures/naxxramas/the-arachnid-quarter
 * adventurePath -> naxxramas
 * detailsPath   -> the-arachnid-quarter
 *
 * @param {string} extensionType
 * @param {string} extensionPath - adventure path taken from url
 * @param {string} detailsPath - adventure details path taken from url
 * @returns {boolean}
 */
export const extensionWingExists = (extensionPath, detailsPath) => {
  const extensionExists = extension_details.find(extension => extension.url === extensionPath);

  if (extensionExists.hasOwnProperty('wings')) {
    return extensionExists.wings
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
 * @param {string} extensionType
 * @param {string} extensionPath - adventure path taken from url
 * @param {string} detailsPath - adventure details path taken from url
 * @param {string} bossPath - adventure details boss path taken from url
 * @returns {boolean}
 */
export const extensionBossExists = (extensionPath, detailsPath, bossPath) => {
  const extensionExists = extension_details.find(extension => extension.url === extensionPath);

  if(extensionExists.hasOwnProperty('wings')) {
    return extensionExists.wings
          .find(wing => wing.url === detailsPath).bosses
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
 * @param {string} extension - extension path taken from url
 * @param {string} extensionType - extension type f/e adventures, expansions
 * @returns {boolean}
 */
export const extensionExists = (extension) => extension_details.find(ext => ext.url === extension);
