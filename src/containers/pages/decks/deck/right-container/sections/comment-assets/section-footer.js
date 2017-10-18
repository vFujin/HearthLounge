import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SectionFooterCommentBox from './section-footer-commentbox';
import {postComment} from '../../../../../../../firebase/decks/comments/create/comment';
import {getComments} from "../../../../../../../firebase/decks/comments/read/index";
import {getSimplifiedUser} from "../../../../../../../firebase/user/read/index";
import * as actions from "../../../../../../../redux/deck/tools/actions";

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

  render() {
    const {commentBoxIsActive, deckCommentControlled, updateComment, previewIsActive, deckComment} = this.props;
    return (
        <div className="section__footer">

          {!commentBoxIsActive ?
              <div className="add-comment">
                <button onClick={this.handleAddCommentClick} className="btn btn-pearl">Add comment</button>
              </div>
              : <SectionFooterCommentBox deckCommentControlled={deckCommentControlled}
                                         updateComment={deckComment}
                                         previewIsActive={previewIsActive}
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
  return {deckCommentControlled, commentBoxIsActive, previewIsActive, deckComment}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCommentText: payload => dispatch(actions.updateCommentText(payload)),
    toggleCommentBox: payload => dispatch(actions.toggleCommentBox(payload)),
    togglePreview: payload => dispatch(actions.togglePreview(payload))
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