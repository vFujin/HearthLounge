import {error, success} from './messages';

export const upvote = (el, uid, userVote, elId) =>{
  el.upvotes++;
  el[uid] = { type: "upvote" };
  userVote.set(elId);
};

export const downvote = (el, uid, userVote, elId) => {
  el.downvotes++;
  el[uid] = { type: "downvote" };
  userVote.set(elId);
};

export const nulify = (el, uid, userVote) => {
  el[uid] = null;
  userVote.remove();
};

export const onVote = (err, commited) =>{
  if(err){
    error("Something's not quite right! Try again later.")
  } else if (!commited) {
    error("You have already voted!")
  } else {
    success("Vote has been submitted")
  }
};