/**
 * TODO: rename this function to maybe updateDeckVotes
 * Updates all Firebase entities in /decks/:deckId with timestamp_votes
 * PS. fuck that lack of multiquery.
 *
 * @param {string} voteType
 * @param {object} element
 * @param {number} addition
 */
export const updateTimestampClassVotes = (voteType, element, addition = 1) =>{
  let splittedTimestampVotes = element.timestamp_votes.split("_", 1);
  let splittedClassTimestampVotes = element.class_timestamp_votes.split("_", 2);
  let splittedModeTimestampVotes = element.mode_timestamp_votes.split("_", 2);
  let splittedModeClassTimestampVotes = element.mode_class_timestamp_votes.split("_", 3);
  let updatedTimestampVotes,
      updatedModeTimestampVotes,
      updatedClassTimestampVotes,
      updatedModeClassTimestampVotes;

  if(voteType === "upvote"){
    updatedTimestampVotes = getVotesFromObj(element, 'timestamp_votes') + addition;
    updatedClassTimestampVotes = getVotesFromObj(element, 'class_timestamp_votes') + addition;
    updatedModeTimestampVotes = getVotesFromObj(element, 'mode_timestamp_votes') + addition;
    updatedModeClassTimestampVotes = getVotesFromObj(element, 'mode_class_timestamp_votes') + addition;

  } else {
    updatedTimestampVotes = getVotesFromObj(element, 'timestamp_votes') - addition;
    updatedClassTimestampVotes = getVotesFromObj(element, 'class_timestamp_votes') - addition;
    updatedModeTimestampVotes = getVotesFromObj(element, 'mode_timestamp_votes') - addition;
    updatedModeClassTimestampVotes = getVotesFromObj(element, 'mode_class_timestamp_votes') - addition;
  }

  splittedTimestampVotes.push(updatedTimestampVotes);
  splittedClassTimestampVotes.push(updatedClassTimestampVotes);
  splittedModeTimestampVotes.push(updatedModeTimestampVotes);
  splittedModeClassTimestampVotes.push(updatedModeClassTimestampVotes);

  element.timestamp_votes = splittedTimestampVotes.join("_");
  element.class_timestamp_votes = splittedClassTimestampVotes.join("_");
  element.mode_timestamp_votes = splittedModeTimestampVotes.join("_");
  element.mode_class_timestamp_votes = splittedModeClassTimestampVotes.join("_");

  if(element.boss_class_votes) {
    updateBossClassVotes(voteType, element, addition);
  }
};

/**
 * Gets votes from firebase entity
 * @example
 * Firebase key: class_timestamp_votes
 * Firebase value: warlock_15000019_0010
 * getVotesFromObj(warlock_15000019_0010) returns parsed 0010
 *
 * @param {object} element
 * @param {string} entityToUpdate
 * @return {Number}
 */
const getVotesFromObj = (element, entityToUpdate) =>{
  return parseInt(element[entityToUpdate].split("_").splice(-1)[0]);
};

/**
 * Separate function for boss_class_votes entity for better readability
 *
 * @param {string} voteType
 * @param {object} element
 * @param {number} addition
 */
const updateBossClassVotes = (voteType, element, addition) =>{
  let splittedBossClassVotes = element.boss_class_votes.split("_", 2);
  let updatedBossClassVotes;

  if(voteType === "upvote"){
    updatedBossClassVotes = getVotesFromObj(element, 'boss_class_votes') + addition;
  } else {
    updatedBossClassVotes = getVotesFromObj(element, 'boss_class_votes') - addition;
  }
  splittedBossClassVotes.push(updatedBossClassVotes);

  element.boss_class_votes = splittedBossClassVotes.join("_");
};