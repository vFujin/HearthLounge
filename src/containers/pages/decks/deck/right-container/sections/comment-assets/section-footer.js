import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SectionFooterCommentBox from './section-footer-commentbox';
import {getComments} from "../../../../../../../firebase/decks/comments/read/index";
import {getSimplifiedUser} from "../../../../../../../firebase/user/read/index";
import * as actions from "../../../../../../../redux/deck/tools/actions";
import {postDeckCommentRequest} from "../../../../../../../redux/deck/comments/post-comment/actions";

const updateCommentText = _.debounce((updateCommentText, value) => {
  updateCommentText({deckComment: value})
}, 300);

class SectionFooter extends PureComponent {

  componentWillUnmount(){
    this.props.toggleCommentBox(false);
    this.props.togglePreview(false);
  }

  handleInputChange = (e) => {
    let value = e.target.value;
    this.props.updateCommentText({deckCommentControlled: value});
    updateCommentText(this.props.updateCommentText, value);
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
    const {current, deckId, deckComment, postComment, updateComments, uid} = this.props;
    postComment({current, deckComment, deckId, uid});
    // getComments(deckId, uid, (comments)=>{
    //   updateComments(deckId, comments);
    //   let users = {};
    //   comments.map(c=>getSimplifiedUser(c.authorId, userDetails=>Object.assign(users, {[c.authorId]: userDetails})));
    //   this.props.updateUsersDetails(users)
    // })
  };

  render() {
    const {commentBoxIsActive, deckCommentControlled, updateComment, previewIsActive, deckComment, deckCommentPostingStatus} = this.props;
    return (
        <div className="section__footer">

          {!commentBoxIsActive ?
              <div className="add-comment">
                <button onClick={this.handleAddCommentClick} className="btn btn-pearl">Add comment</button>
              </div>
              : <SectionFooterCommentBox deckCommentControlled={deckCommentControlled}
                                         updateComment={deckComment}
                                         previewIsActive={previewIsActive}
                                         deckCommentPostingStatus={deckCommentPostingStatus}
                                         handlePostCommentClick={this.handlePostCommentClick}
                                         handleInputChange={this.handleInputChange}
                                         handleHideCommentClick={this.handleHideCommentClick}
                                         handlePreviewClick={this.handlePreviewClick}/>
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {deckCommentControlled, commentBoxIsActive, previewIsActive, deckComment} = state.deckView.tools;
  const {uid} = state.users.activeUser;
  const {current} = state.patch;
  const {deckId} = state.deckView.activeDeck;
  const {deckCommentPostingStatus} = state.deckView;
  return {deckCommentControlled, commentBoxIsActive, previewIsActive, deckComment, uid, current, deckId, deckCommentPostingStatus};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCommentText: payload => dispatch(actions.updateCommentText(payload)),
    toggleCommentBox: payload => dispatch(actions.toggleCommentBox(payload)),
    togglePreview: payload => dispatch(actions.togglePreview(payload)),
    postComment: payload => dispatch(postDeckCommentRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionFooter);

SectionFooterCommentBox.propTypes = {
  commentBoxIsActive: PropTypes.bool,
  handleInputChange: PropTypes.func,
  handlePostCommentClick: PropTypes.func,
  handleAddCommentClick: PropTypes.func,
  handleHideCommentClick: PropTypes.func,
  handlePreviewClick: PropTypes.func,
  deckCommentControlled: PropTypes.string,
  updateComment: PropTypes.func,
};