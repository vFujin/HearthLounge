import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Comment from '../comment';
import Loader from '../../../../../../../components/loaders/loader';
import {convertBBCode} from '../../../../../../../components/text-editor/utils/convert-bbcode';

const SectionBody = ({countComments, clickedCommentId, handleCommentOptionsClick, activeUser, deckComments, deckCommentDeletingStatus, tools}) => {
  const {previewIsActive, commentId, commentVotes, votedComments, usersDetails, deckComment} = tools;
  const {deletedCommentIds} = deckCommentDeletingStatus.deletedComments;
  const {authenticated, uid} = activeUser;
  let comments = _.map(deckComments.all).filter(comment => !deletedCommentIds.includes(comment.commentId));

  const listComments = () => {
    if (deckComments.loading) {
      return <Loader/>
    }

    if (countComments === 0) {
      return <p>There are no comments yet.</p>
    }

    return comments.map((comment, i) => <Comment key={i}
                                                 authenticated={authenticated}
                                                 activeUserId={uid}
                                                 comment={comment}
                                                 usersDetails={usersDetails}
                                                 commentId={commentId}
                                                 commentVotes={commentVotes}
                                                 votedComments={votedComments}
                                                 clickedCommentId={clickedCommentId}
                                                 handleCommentOptionsClick={handleCommentOptionsClick}/>
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

const mapStateToProps = (state) => {
  const {deckComments, deckCommentDeletingStatus, tools} = state.deckView;
  const {activeUser} = state.users;
  return {activeUser, deckComments, deckCommentDeletingStatus, tools}
};

export default connect(mapStateToProps)(SectionBody)