import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';

import {getSimplifiedUser} from "../../../../../../firebase/user/read/index";
import {getComment, getComments} from '../../../../../../firebase/decks/comments/read';
import {updateCommentRating} from '../../../../../../firebase/decks/comments/update';
import * as deckCommentActions from "../../../../../../redux/actions/deck/deck-view.action";
import {FETCH_ACTIVE_DECK_COMMENTS_REQUEST} from "../../../../../../redux/deck/comments/fetch-comments/types";



class DeckComments extends PureComponent {
  componentDidMount() {
    const {activeUser, params, fetchComments} = this.props;
    const {deckId} = params;


    if(activeUser){
      const {uid} = activeUser;
      fetchComments({deckId, uid});
    } else {
      fetchComments({deckId});
    }
    // getComments(deckId, false, comments => {
    //   let users = {};
    //   updateComments(deckId, comments);
    //   comments.map(c=>getSimplifiedUser(c.authorId, userDetails=>{
    //     let updateUsers = Object.assign(users, {[c.authorId]: userDetails});
    //     updateUsersDetails(users);
    //     return updateUsers;
    //   }));
    // });
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

  render() {
    const {activeDeck, comments, params, commentVotes, commentId, deckComments, deckCommentControlled, updateComment, commentBoxIsActive, previewIsActive, votedComments, usersDetails} = this.props;
    const { deckId } = params.deckId;
    const countComments = activeDeck.comments;

    return (
        <div className={`container__details--section container__details--comments v-rows-${commentBoxIsActive ? '3 editorActive' : '2'}`}>
          <SectionHeader authenticated={this.props.activeUser.authenticated}
                         countComments={countComments}
                         commentBoxIsActive={commentBoxIsActive}/>
          <SectionBody comments={_.map(deckComments.all)}
                       countComments={countComments}
                       handleCommentClick={this.handleCommentClick}
                       commentId={commentId}
                       deckId={deckId}
                       commentVotes={commentVotes}
                       votedComments={votedComments}
                       deckComment={deckComments}
                       previewIsActive={previewIsActive}
                       usersDetails={usersDetails}
                       handleCommentVotingClick={this.handleCommentVotingClick}/>
          {commentBoxIsActive ? <SectionFooter /> : null}
        </div>
    )
  }

}

const mapStateToProps = (state) => {
  const {comments, vote, commentId, commentVotes, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments, usersDetails} = state.deckView.tools;
  const {deckComments} = state.deckView;
  return {comments, vote, deckComments, commentId, commentVotes, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments, usersDetails}
};

const mapDispatchToProps = (dispatch) => {

  const {updateComment, updateComments,
    updateCommentVote, updateUsersDetails, updateUserVotedDeckComments, updateCommentVotes, updateActiveCommentId} = deckCommentActions;

  return {
    fetchComments: payload => dispatch({type: FETCH_ACTIVE_DECK_COMMENTS_REQUEST, payload}),

    updateCommentVote: vote => dispatch(updateCommentVote(vote)),
    updateComments: (deckId, comments) => dispatch(updateComments(deckId, comments)),
    updateUsersDetails: usersDetails => dispatch(updateUsersDetails(usersDetails)),
    updateUserVotedDeckComments: (uid, deckId, votedComments) => dispatch(updateUserVotedDeckComments(uid, deckId, votedComments)),
    updateCommentVotes: commentVotes => dispatch(updateCommentVotes(commentVotes)),
    updateActiveCommentId: activeComment => dispatch(updateActiveCommentId(activeComment))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments)

DeckComments.propTypes = {
  updateComment: PropTypes.func
};