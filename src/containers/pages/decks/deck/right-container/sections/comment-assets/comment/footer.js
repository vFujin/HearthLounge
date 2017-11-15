import React from 'react';
import Icon from "../../../../../../../../components/icon";

export const CommentFooter = ({authenticated, commentId, voteType, handleCommentVotingClick, commentVotes, votes}) => {

  const VotingIcon = ({voteId}) =>{
    const iconType = voteId === "upvote" ? "up" : "down";
    const voted = voteType && voteType === "upvote" ? "voted" : "";

    return (
      <div data-commentid={commentId}
           onClick={handleCommentVotingClick}
           id={voteId}
           className={`${iconType} peripheral ${voted}`}>
        <Icon name={`circle-${iconType}`}/>
      </div>
    )
  };

  return (
    <div className="footer">
      {authenticated && <VotingIcon voteId="upvote"/>}
      <div className={`votes peripheral ${!authenticated && 'default'}`}>{(commentVotes && commentVotes.id === commentId) ? commentVotes.votes : votes}</div>
      {authenticated && <VotingIcon voteId="downvote"/>}
    </div>
  )
};