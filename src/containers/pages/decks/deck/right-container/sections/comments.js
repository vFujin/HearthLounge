import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';
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
    const {activeDeck, commentBoxIsActive, deckCommentDeletingStatus, deckCommentPostingStatus, deckComments} = this.props;
    const {countDeletedComments, deletedCommentIds} = deckCommentDeletingStatus.deletedComments;
    const {countPostedComments} = deckCommentPostingStatus.postedComments;
    const countComments = activeDeck.comments + countPostedComments - countDeletedComments;

    let comments = _.map(deckComments.all).filter(comment => !deletedCommentIds.includes(comment.commentId));
    let mergedComments = _.concat(comments, deckCommentPostingStatus.postedComments.comments).filter(comment=> !deletedCommentIds.includes(comment.commentId));

    return (
        <div className={`container__details--section container__details--comments v-rows-${commentBoxIsActive ? '3 editorActive' : '2'}`}>
          <SectionHeader countComments={countComments}/>
          <SectionBody comments={mergedComments}
                       countComments={countComments}
                       clickedCommentId={this.state.clickedCommentId}
                       handleCommentOptionsClick={this.handleCommentOptionsClick}/>
          {commentBoxIsActive ? <SectionFooter /> : null}
        </div>
    )
  }

}

const mapStateToProps = (state) => {
  const {deckCommentDeletingStatus, deckCommentPostingStatus, deckComments, tools} = state.deckView;
  const {commentBoxIsActive} = tools;
  const {activeUser} = state.users;
  return {activeUser, commentBoxIsActive, deckCommentDeletingStatus, deckCommentPostingStatus, deckComments};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: payload => dispatch({type: FETCH_ACTIVE_DECK_COMMENTS_REQUEST, payload}),
    deleteComment: payload => dispatch({type: DELETE_DECK_COMMENT_REQUEST, payload})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments)