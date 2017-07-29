import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../../../view/comment';
import Loader from '../../../../../../../components/loader';
import {convertBBCode} from '../../../../../../shared-assets/editor/text-editor-functions';

const SectionBody = ({comments, deckComment, deckId, previewIsActive, commentVotes, commentId, usersDetails, handleCommentClick, handleCommentVotingClick, votedComments}) => {
  const listComments = () =>{

    if(comments === undefined){
      return <Loader/>
    } else {
      return comments.map((comment, i)=> <Comment key={i}
                                                  comment={comment}
                                                  deckId={deckId}
                                                  usersDetails={usersDetails}
                                                  commentId={commentId}
                                                  commentVotes={commentVotes}
                                                  votedComments={votedComments}
                                                  handleCommentClick={handleCommentClick}
                                                  handleCommentVotingClick={handleCommentVotingClick}/>
      )
    }
  };

  return (
      <div className="section__body">
        <div className={previewIsActive ? "display-none" : "comments"}>
          {listComments()}
        </div>
        <div className={!previewIsActive ? "display-none" : "comment-preview"}>
          {convertBBCode(deckComment)}
        </div>
      </div>
  )
};

export default SectionBody;

SectionBody.propTypes = {
  comments: PropTypes.array,
  deckComment: PropTypes.string,
  deckId: PropTypes.string,
  previewIsActive: PropTypes.bool,
  commentVotes: PropTypes.shape({
    downvotes: PropTypes.number,
    upvotes: PropTypes.number,
    votes: PropTypes.number,
    id: PropTypes.string
  }),
  commentId: PropTypes.string,
  handleCommentClick: PropTypes.func,
  handleCommentVotingClick: PropTypes.func,
  votedComments: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
      ])
};