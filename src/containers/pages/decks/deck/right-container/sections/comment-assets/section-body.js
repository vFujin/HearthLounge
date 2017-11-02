import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import Loader from '../../../../../../../components/loaders/loader';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';

const SectionBody = ({comments, countComments, deckComments, deckComment, deckId, previewIsActive, commentVotes, commentId, usersDetails, handleCommentClick, handleCommentVotingClick, votedComments}) => {
  const listComments = () => {
    if (deckComments.loading) {
      return <Loader/>
    }

    if (countComments === 0) {
      return <p>There are no comments yet.</p>
    }

    return comments.map((comment, i) => <Comment key={i}
                                                 comment={comment}
                                                 deckId={deckId}
                                                 usersDetails={usersDetails}
                                                 commentId={commentId}
                                                 commentVotes={commentVotes}
                                                 votedComments={votedComments}
                                                 handleCommentClick={handleCommentClick}
                                                 handleCommentVotingClick={handleCommentVotingClick}/>
    )
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
  deckComment: PropTypes.object,
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