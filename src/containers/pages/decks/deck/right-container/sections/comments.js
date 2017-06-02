import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';

import {fetchComments, fetchUserVotedDeckComments, postComment, rateComment} from '../../../../../../server/decks/deck-comments';


const updateCommentText = _.debounce((updateComment, value) => {
  updateComment({deckComment: value})
}, 300);

class DeckComments extends Component {
  componentDidMount(){
    const {deckId} = this.props.params;
    fetchComments(deckId, comments=>this.props.updateComments(deckId, comments));

    if(this.props.activeUser) {
      fetchUserVotedDeckComments(this.props.params.deckId, userVotedComments => {
        // Needs refactor
        const {uid} = this.props.activeUser;
        let voteType = _.map(userVotedComments).filter(id => Object.keys(id).includes(uid)).map(id => id[uid]);
        let votedCommentId = _.map(userVotedComments).filter(id => Object.keys(id).includes(uid)).map(id => id.id);
        let toObj = _.zipObject(votedCommentId, voteType);
        this.props.updateUserVotedDeckComments(uid, deckId, toObj)
      })
    }
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    this.props.updateComment({deckCommentControlled: value});
    updateCommentText(this.props.updateComment, value);
  };

  handlePreviewClick = () => {
    let isActive = this.props.previewIsActive === false ? true : false;
    this.props.togglePreview(isActive);
  };

  handleAddCommentClick = () => {
    this.props.toggleCommentBox(true);
  };

  handleHideCommentClick = () => {
    this.props.toggleCommentBox(false);
    this.props.togglePreview(false);
  };

  handlePostCommentClick = () => {
    const {deckId} = this.props.params;
    const {username, uid} = this.props.activeUser;
    postComment(username, this.props.deckComment, deckId, uid);
    fetchComments(deckId, (comments)=>this.props.updateComments(deckId, comments))
  };

  handleCommentClick = (e) =>{
    let commentId = e.currentTarget.id;
    this.props.updateActiveCommentId(commentId);
  };

  handleCommentVotingClick = (e) =>{
    let commentId = e.currentTarget.dataset.commentid;
    let vote = e.currentTarget.id;
    const {deckId} = this.props.params.deckId;
    const {uid} = this.props.activeUser;
    console.log(this.props);
    rateComment(deckId, commentId, uid, vote);
  };




  render() {
    const {comments, params, commentVotes, commentId, deckComment, deckCommentControlled, updateComment, commentBoxIsActive, previewIsActive, votedComments} = this.props;
    const { deckId } = params.deckId;
    let mappedComments = _.map(comments);
    return (
        <div className={`container__details--section container__details--comments ${commentBoxIsActive ? 'editorActive' : ''}`}>
          <SectionHeader comments={comments}/>

          <SectionBody comments={mappedComments}
                       handleCommentClick={this.handleCommentClick}
                       commentId={commentId}
                       deckId={deckId}
                       commentVotes={commentVotes}
                       votedComments={votedComments}
                       deckComment={deckComment}
                       previewIsActive={previewIsActive}
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
  const {comments, votes, commentId, commentVotes, deckComment, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments} = state.deckView;
  return {comments, deckComment, commentId, commentVotes, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComment: (props) => (dispatch({
      type: 'UPDATE_COMMENT', props
    })),
    updateCommentVotes: (commentId, commentVotes) => (dispatch({
      type: 'UPDATE_COMMENT_VOTES', commentId, commentVotes
    })),
     toggleCommentBox: (commentBoxIsActive) => (dispatch({
      type: 'TOGGLE_COMMENT_BOX', commentBoxIsActive
    })),
    togglePreview: (previewIsActive) => (dispatch({
      type: 'TOGGLE_PREVIEW', previewIsActive
    })),
    updateComments: (deckId, comments) => (dispatch({
      type: 'FETCH_COMMENTS',  comments: {[deckId]: _.map(comments)}
    })),
    updateUserVotedDeckComments: (uid, deckId, votedComments) => (dispatch({
      type: 'FETCH_USER_VOTED_COMMENTS',
      votedComments: {
        [deckId]: votedComments
      }
    })),
    updateActiveCommentId: (activeComment) => (dispatch({
      type: 'UPDATE_ACTIVE_COMMENT_ID', activeComment
    }))
  }
};






export default connect(mapStateToProps, mapDispatchToProps)(DeckComments)

DeckComments.propTypes = {
  updateComment: PropTypes.func
};