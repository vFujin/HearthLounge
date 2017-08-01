import React from 'react';
import {timeDifference} from '../../../../../../utils/unix-to-date';
import MoreOptions from '../../../../../shared-assets/posts/more-options';
import SimplifiedUserSnippet from '../../../../../../components/user/simplified-user-snippet';
import Tooltip from 'antd/lib/tooltip';

const Comment = ({comment, deckId, commentVotes, votedComments, usersDetails, handleCommentVotingClick}) => {
  const {authorId, created, patch, text, commentId, votes, voteType} = comment;
  let user = {};
  Object.entries(usersDetails).filter(o => o[0] === authorId).map(o =>user = o[1]);
  const {rank, avatar, role, username} = user;

  let commented = timeDifference(created, false);
  let detailedDate = timeDifference(created, true);
  // console.log(Object.values(votedComments)[0][id])
  return (
    <div className="comment">
      <SimplifiedUserSnippet rank={rank} role={role} avatar={avatar} username={username} />
      <div className="details">
        <div className="header">
          <Tooltip title={detailedDate} placement="right">
            <div className="commented">{commented}</div>
          </Tooltip>
          <div className="header-right">
            <div className="patch">{patch}</div>
            <MoreOptions/>
          </div>
        </div>
        <div className="body">
          {text}
        </div>
        <div className="footer">
          <div data-commentid={commentId} onClick={handleCommentVotingClick} id="upvote" className={`up peripheral ${(voteType && voteType ==="upvote") ? 'voted' : ''}`}><span className="hs-icon icon-circle-up"></span></div>
          <div className="votes peripheral">{(commentVotes && commentVotes.id === commentId) ? commentVotes.votes : votes}</div>
          <div data-commentid={commentId} onClick={handleCommentVotingClick} id="downvote" className={`down peripheral ${(voteType && voteType ==="downvote") ? 'voted' : ''}`}><span className="hs-icon icon-circle-down"></span></div>
        </div>
      </div>
    </div>
  );
};



export default Comment;