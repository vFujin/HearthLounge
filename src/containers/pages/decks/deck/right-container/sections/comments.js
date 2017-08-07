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
import {postComment} from '../../../../../../firebase/decks/comments/create/comment';
import * as deckCommentActions from "../../../../../../redux/actions/decks/deck-view";

const updateCommentText = _.debounce((updateComment, value) => {
  updateComment({deckComment: value})
}, 300);

class DeckComments extends PureComponent {
  componentDidMount() {
    const {activeUser, params, updateComments, updateUsersDetails} = this.props;
    const {deckId} = params;
    if(activeUser){
      const {uid} = activeUser;
      getComments(deckId, uid, comments => updateComments(deckId, comments));
    }
    getComments(deckId, false, comments => {
      let users = {};
      updateComments(deckId, comments);
      comments.map(c=>getSimplifiedUser(c.authorId, userDetails=>{
        let updateUsers = Object.assign(users, {[c.authorId]: userDetails});
        updateUsersDetails(users);
        return updateUsers;
      }));
    });
  }

  componentWillUnmount(){
    // const {deckId} = this.props.params;
    this.props.updateComments([])
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    this.props.updateComment({deckCommentControlled: value});
    updateCommentText(this.props.updateComment, value);
  };

  handlePreviewClick = () => {
    this.props.togglePreview(!this.props.previewIsActive);
  };

  handleAddCommentClick = () => {
    this.props.toggleCommentBox(true);
  };


  handleHideCommentClick = () => {
    this.props.toggleCommentBox(false);
    this.props.togglePreview(false);
  };

  handlePostCommentClick = () => {
    const {patch, params, activeUser, deckComment, updateComments} = this.props;
    const {deckId} = params;
    const {uid} = activeUser;
    postComment(patch, deckComment, deckId, uid);
    getComments(deckId, uid, (comments)=>{
      updateComments(deckId, comments);
      let users = {};
      comments.map(c=>getSimplifiedUser(c.authorId, userDetails=>Object.assign(users, {[c.authorId]: userDetails})));
      this.props.updateUsersDetails(users)
    })
  };

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
    const {comments, params, commentVotes, commentId, deckComment, deckCommentControlled, updateComment, commentBoxIsActive, previewIsActive, votedComments, usersDetails} = this.props;
    const { deckId } = params.deckId;
    let mappedComments = Object.values(comments)[0];

    return (
        <div className={`container__details--section container__details--comments v-rows-3 ${commentBoxIsActive ? 'editorActive' : ''}`}>
          <SectionHeader comments={comments}/>

          <SectionBody comments={mappedComments}
                       handleCommentClick={this.handleCommentClick}
                       commentId={commentId}
                       deckId={deckId}
                       commentVotes={commentVotes}
                       votedComments={votedComments}
                       deckComment={deckComment}
                       previewIsActive={previewIsActive}
                       usersDetails={usersDetails}
                       handleCommentVotingClick={this.handleCommentVotingClick}/>

          <SectionFooter commentBoxIsActive={commentBoxIsActive}
                         deckCommentControlled={deckCommentControlled}
                         updateComment={updateComment}
                         handleInputChange={this.handleInputChange}
                         handleAddCommentClick={this.handleAddCommentClick}
                         handlePostCommentClick={this.handlePostCommentClick}
                         handleHideCommentClick={this.handleHideCommentClick}
                         handlePreviewClick={this.handlePreviewClick}/>
        </div>
    )
  }

}

const mapStateToProps = (state) => {
  const {comments, vote, commentId, commentVotes, deckComment, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments, usersDetails} = state.deckView;
  return {comments, vote, deckComment, commentId, commentVotes, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments, usersDetails}
};

const mapDispatchToProps = (dispatch) => {

  const {toggleCommentBox, togglePreview, updateComment, updateComments,
    updateCommentVote, updateUsersDetails, updateUserVotedDeckComments, updateCommentVotes, updateActiveCommentId} = deckCommentActions;

  return {
    updateComment: props => dispatch(updateComment(props)),
    updateCommentVote: vote => dispatch(updateCommentVote(vote)),
    toggleCommentBox: commentBoxIsActive => dispatch(toggleCommentBox(commentBoxIsActive)),
    togglePreview: previewIsActive => dispatch(togglePreview(previewIsActive)),
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