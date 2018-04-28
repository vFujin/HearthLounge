import React from 'react';
import {connect} from 'react-redux';
import Tooltip from 'antd/lib/tooltip';
import {toggleCommentBox} from "../../../../../../../redux/deck/tools/actions";

const SectionHeader = ({authenticated, countComments, commentBoxIsActive, toggleCommentBox}) => {
  const handleAddCommentClick = () => {
    toggleCommentBox(!commentBoxIsActive);
  };

  return (
      <div className="section__header">
        <div className="line"/>
        <h1>{countComments || 0} {countComments  === 1 ? 'comment' : 'comments'}</h1>
        <div className="section__header--options">
          <Tooltip title="You have to be Signed In!" trigger={authenticated ? "none" : "hover"} placement="bottom" arrowPointAtCenter>
            <button onClick={authenticated && handleAddCommentClick}
                    disabled={!authenticated}
                    className={`btn btn__default--dark btn__darkBorder ${commentBoxIsActive && "btn__default--active"}`}>
              Add Comment
            </button>
          </Tooltip>
        </div>
      </div>
  )
};

const mapStateToProps = state => {
  const {authenticated} = state.users.activeUser;
  const {commentBoxIsActive} = state.deckView.tools;
  return {authenticated, commentBoxIsActive};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCommentBox: payload => dispatch(toggleCommentBox(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionHeader);

