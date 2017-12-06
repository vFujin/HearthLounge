import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';

import {getComment} from '../../../../../../firebase/decks/comments/read';
import {updateCommentRating} from '../../../../../../firebase/decks/comments/update';
// import * as deckCommentActions from "../../../../../../redux/actions/deck/deck-view.action";
import {FETCH_ACTIVE_DECK_COMMENTS_REQUEST} from "../../../../../../redux/deck/comments/fetch-comments/types";
import {DELETE_DECK_COMMENT_REQUEST} from "../../../../../../redux/deck/comments/delete-comment/types";



class DeckComments extends PureComponent {
  constructor(){
    super();

    this.state = {
      clickedCommentId: ''
    }
  }

  componentDidMount() {
    const {activeUser, params, fetchComments} = this.props;
    const {deckId} = params;


    if(activeUser){
      const {uid} = activeUser;
      fetchComments({deckId, uid});
    } else {
      fetchComments({deckId});
    }
  }

  componentWillUnmount(){
    // const {deckId} = this.props.params;
    // this.props.updateComments([])
  }

  handleCommentClick = (e) =>{
    let commentId = e.currentTarget.id;
    this.props.updateActiveCommentId(commentId);
  };

  handleCommentVotingClick = (e) =>{
    let commentId = e.currentTarget.dataset.commentid;
    let vote = e.currentTarget.id;
    const {deckId} = this.props.params;
    const {uid} = this.props.activeUser;
    updateCommentRating(deckId, commentId, uid, vote, (voteType)=>this.props.updateCommentVote(voteType));
    getComment(deckId, commentId, comment=>this.props.updateCommentVotes(comment), uid);
    // this.props.updateCommentVotes({upvotes: 0, downvotes: 0, votes: 0, id: ""})
  };

  handleCommentOptionsClick = (e) =>{
    const {deleteComment, params, activeUser} = this.props;
    const {key, item} = e;
    const {commentId} = item.props;
    const {uid} = activeUser;
    const {deckId} = params;

    this.setState({
      clickedCommentId: commentId
    });

    switch(key){
      case "delete": {
        const commentObj = {commentId, deckId, uid};
        return deleteComment(commentObj);
      }
      case "flag": return;
    }
  };

  render() {
    const {activeUser, activeDeck, params, commentVotes, commentId, deckComments, deckComment, deckCommentDeletingStatus, commentBoxIsActive, previewIsActive, votedComments, usersDetails} = this.props;
    const { deckId } = params.deckId;
    const {authenticated, uid} = activeUser;
    const {deletedCommentIds, countDeletedComments} = deckCommentDeletingStatus.deletedComments;
    const countComments = activeDeck.comments - countDeletedComments;
    let comments = _.map(deckComments.all).filter(comment => !deletedCommentIds.includes(comment.commentId));

    return (
        <div className={`container__details--section container__details--comments v-rows-${commentBoxIsActive ? '3 editorActive' : '2'}`}>
          <SectionHeader authenticated={authenticated}
                         countComments={countComments}
                         commentBoxIsActive={commentBoxIsActive}/>
          <SectionBody comments={comments}
                       authenticated={authenticated}
                       countComments={countComments}
                       handleCommentClick={this.handleCommentClick}
                       commentId={commentId}
                       deckId={deckId}
                       commentVotes={commentVotes}
                       votedComments={votedComments}
                       deckComments={deckComments}
                       deckComment={deckComment}
                       previewIsActive={previewIsActive}
                       usersDetails={usersDetails}
                       handleCommentVotingClick={this.handleCommentVotingClick}
                       activeUserId={uid}
                       clickedCommentId={this.state.clickedCommentId}
                       handleCommentOptionsClick={this.handleCommentOptionsClick}/>
          {commentBoxIsActive ? <SectionFooter /> : null}
        </div>
    )
  }

}

const mapStateToProps = (state) => {
  const {vote, commentId, commentVotes, activeComment, commentBoxIsActive, previewIsActive, votedComments, usersDetails, deckComment} = state.deckView.tools;
  const {deckComments, deckCommentDeletingStatus} = state.deckView;
  const {activeUser} = state.users;
  return {activeUser, vote, deckComments, commentId, commentVotes, activeComment, deckCommentDeletingStatus, commentBoxIsActive, previewIsActive, votedComments, usersDetails, deckComment}
};

const mapDispatchToProps = (dispatch) => {

  // const {updateComment, updateComments,
    // updateCommentVote, updateUsersDetails, updateUserVotedDeckComments, updateCommentVotes, updateActiveCommentId} = deckCommentActions;

  return {
    fetchComments: payload => dispatch({type: FETCH_ACTIVE_DECK_COMMENTS_REQUEST, payload}),
    deleteComment: payload => dispatch({type: DELETE_DECK_COMMENT_REQUEST, payload})
    // updateCommentVote: vote => dispatch(updateCommentVote(vote)),
    // updateComments: (deckId, comments) => dispatch(updateComments(deckId, comments)),
    // updateUsersDetails: usersDetails => dispatch(updateUsersDetails(usersDetails)),
    // updateUserVotedDeckComments: (uid, deckId, votedComments) => dispatch(updateUserVotedDeckComments(uid, deckId, votedComments)),
    // updateCommentVotes: commentVotes => dispatch(updateCommentVotes(commentVotes)),
    // updateActiveCommentId: activeComment => dispatch(updateActiveCommentId(activeComment))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments)

DeckComments.propTypes = {
  updateComment: PropTypes.func
};