export const updateTimestampClassVotes = (voteType, element, addition = 1) =>{
  let splittedTimestampClassVotes = element.class_timestamp_votes.split("_", 2);
  let updatedTimestampClassVotes;
  if(voteType === "upvote"){
    updatedTimestampClassVotes = Number(element.class_timestamp_votes.split("_").splice(-1)[0]) + addition;
  } else {
    updatedTimestampClassVotes = Number(element.class_timestamp_votes.split("_").splice(-1)[0]) - addition;
  }
  splittedTimestampClassVotes.push(updatedTimestampClassVotes);

  element.class_timestamp_votes = splittedTimestampClassVotes.join("_");
};