import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';

import {fetchComments, fetchComment, rateComment} from '../../../../../../server/decks/deck-comments';
import {postComment} from '../../../../../../server/save-to-firebase/deck-comment';

const updateCommentText = _.debounce((updateComment, value) => {
  updateComment({deckComment: value})
}, 300);

class DeckComments extends Component {
  /**
   * Using componentDidMount just to fetch user voted comments that is logged in,
   * though componentDidMount works only when user is redirected from other webapp page,
   * since usually Firebase async call that checks the authentication will end after mounted component
   *
   * Any user page refreshing / typing URL by hand will fail to fetch; see shouldComponentUpdate below
   */
  componentDidMount() {
    const {deckId} = this.props.params;


    // fetchUserVotedDeckComments(deckId, (comment)=>this.props.updateUserVotedDeckComments(comment))
    if(this.props.activeUser){
      const {uid} = this.props.activeUser;
      fetchComments(deckId, uid, comments => this.props.updateComments(deckId, comments));
      // fetchUserVotedDeckComments(deckId, uid, userVotedComments => {
      //   // Needs refactor
      //
      //   let voteType = _.map(userVotedComments).filter(id => Object.keys(id).includes(uid)).map(id => id[uid]);
      //   let votedCommentId = _.map(userVotedComments).filter(id => Object.keys(id).includes(uid)).map(id => id.id);
      //
      //   let toObj = _.zipObject(votedCommentId, voteType);
      //   this.props.updateUserVotedDeckComments(uid, deckId, toObj)
      // })
    }
  }

  /**
   * If user refreshes / goes to the deck by URL there has to be validation if he is logged in,
   * and since Firebase does only async calls we can't depend only on componentDidMount
   * (since component can be mounted already, but async call didn't finish yet)
   *
   * @param {object} nextProps - Next properties that will trigger the render
   *                             (in this case when Firebase finishes the authentication)
   * @returns {boolean} - If true, comments component rerenders
   */
  // componentWillReceiveProps(nextProps){
  //   const {deckId} = this.props.params;
  //
  //   if(nextProps.activeUser){
  //     const {uid} = this.props.activeUser;
  //     console.log("uid:", uid)
  //     fetchComments(deckId, uid, comments => this.props.updateComments(deckId, comments));
  //     // fetchUserVotedDeckComments(deckId, uid, userVotedComments => {
  //     //   // Needs refactor
  //     //   const {uid} = this.props.activeUser;
  //     //   let voteType = _.map(userVotedComments).filter(id => Object.keys(id).includes(uid)).map(id => id[uid]);
  //     //   let votedCommentId = _.map(userVotedComments).filter(id => Object.keys(id).includes(uid)).map(id => id.id);
  //     //
  //     //   let toObj = _.zipObject(votedCommentId, voteType);
  //     //   this.props.updateUserVotedDeckComments(uid, deckId, toObj)
  //     // });
  //   }
  //  return true;
  // }


  /**
   * Once we leave deck component/page we have to reset user voted comments in redux,
   * so they won't "blink" while disappearing due to saved state.
   *
   * Function purely for better user experience.
   */
  componentWillUnmount(){
    this.props.updateUserVotedDeckComments("", "", "")
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
    const {deckId} = this.props.params;
    const {uid} = this.props.activeUser;
    rateComment(deckId, commentId, uid, vote, (voteType)=>this.props.updateCommentVote(voteType));
    fetchComment(deckId, commentId, (comment)=>this.props.updateCommentVotes(comment))
  };


  render() {
    const {comments, params, commentVotes, commentId, deckComment, deckCommentControlled, updateComment, commentBoxIsActive, previewIsActive, votedComments} = this.props;
    const { deckId } = params.deckId;

    let mappedComments = Object.values(comments);
    console.log(mappedComments)
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
  const {comments, vote, commentId, commentVotes, deckComment, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments} = state.deckView;
  return {comments, vote, deckComment, commentId, commentVotes, activeComment, deckCommentControlled, commentBoxIsActive, previewIsActive, votedComments}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateComment: (props) => (dispatch({
      type: 'UPDATE_COMMENT', props
    })),
    updateCommentVote: (vote) => (dispatch({
      type: 'UPDATE_COMMENT_VOTE', vote
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
    updateCommentVotes: (commentVotes) => (dispatch({
      type: 'UPDATE_COMMENT_VOTES', commentVotes
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