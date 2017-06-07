export function voteTransaction(selector, uid, vote){
  return selector.transaction(function(comment){
    const upvote = "upvote";
    const downvote = "downvote";

    if(comment){
      if(comment[uid]){

        if(comment[uid] === upvote && vote === upvote){
          comment.votes--;
          comment.upvotes--;
          comment[uid] = null
        }

        else if (comment[uid] === downvote && vote === downvote) {
          comment.votes++;
          comment.downvotes--;
          comment[uid] = null
        }

        else if (comment[uid] === upvote && vote === downvote){
          comment.votes -= 2;
          comment.upvotes--;
          comment.downvotes++;
          comment[uid] = downvote;
        }

        else {
          comment.votes += 2;
          comment.upvotes++;
          comment.downvotes--;
          comment[uid] = upvote;
        }
      }

      else {
        comment[uid] = vote;
        comment[uid] === upvote ? comment.votes++ : comment.votes--;
        comment[uid] === upvote ? comment.upvotes++ : comment.downvotes++;
      }
    }
    return comment;
  });

}


