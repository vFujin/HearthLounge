import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import SectionHeader from './comment-assets/section-header';
import SectionBody from './comment-assets/section-body';
import SectionFooter from './comment-assets/section-footer';
import {deleteDeckCommentRequest} from "../../../../../../redux/deck/comments/delete-comment/actions";
import {fetchActiveDeckCommentsRequest} from "../../../../../../redux/deck/comments/fetch-comments/actions";
import Loader from "../../../../../../components/loaders/loader";

class DeckComments extends PureComponent {
  state = {
    clickedCommentId: ''
  };

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
      default: return null;
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
          {deckComments.loading
            ? <Loader/>
            : <SectionBody comments={mergedComments}
                           countComments={countComments}
                           clickedCommentId={this.state.clickedCommentId}
                           handleCommentOptionsClick={this.handleCommentOptionsClick}/>
          }
          {commentBoxIsActive && <SectionFooter />}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {activeDeck, deckCommentDeletingStatus, deckCommentPostingStatus, deckComments, tools} = state.deckView;
  const {commentBoxIsActive} = tools;
  const {activeUser} = state.users;
  const {patch} = state.info;
  return {activeUser, activeDeck, commentBoxIsActive, deckCommentDeletingStatus, deckCommentPostingStatus, deckComments, patch};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: payload => dispatch(fetchActiveDeckCommentsRequest(payload)),
    deleteComment: payload => dispatch(deleteDeckCommentRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckComments)