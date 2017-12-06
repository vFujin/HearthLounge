import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment';
import Loader from '../../../../../../../components/loaders/loader';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';

const SectionBody = ({authenticated, comments, countComments, deckComments, deckComment, deckId, previewIsActive, commentVotes, commentId, usersDetails, handleCommentClick, handleCommentVotingClick, votedComments, handleCommentOptionsClick}) => {
  const listComments = () => {
    if (deckComments.loading) {
      return <Loader/>
    }

    if (countComments === 0) {
      return <p>There are no comments yet.</p>
    }

    return comments.map((comment, i) => <Comment key={i}
                                                 authenticated={authenticated}
                                                 comment={comment}
                                                 deckId={deckId}
                                                 usersDetails={usersDetails}
                                                 commentId={commentId}
                                                 commentVotes={commentVotes}
                                                 votedComments={votedComments}
                                                 handleCommentClick={handleCommentClick}
                                                 handleCommentVotingClick={handleCommentVotingClick}
                                                 handleCommentOptionsClick={handleCommentOptionsClick}/>
    )
  };

  return (
      <div className="section__body">
        <div className={previewIsActive ? "display-none" : "comments"}>
          {listComments()}
        </div>
        <div className={!previewIsActive ? "display-none" : "newComment-preview"}>
          {convertBBCode(deckComment)}
        </div>
      </div>
  )
};

export default SectionBody;

SectionBody.propTypes = {
  authenticated: PropTypes.bool,
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