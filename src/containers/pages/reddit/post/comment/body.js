import React from 'react';
import PropTypes from 'prop-types';
import {createMarkup} from '../../../../../utils/reddit/post';

const CommentBody = ({comment, isOfficialDev, renderComment}) =>{
  const {body_html} = comment;

  const renderReplies = (comment) => {
    return comment.replies
        ? comment.replies.data.children.map(c => renderComment(c.data))
        : [];
  };

  return (
      <div className="comment_body">
        <p className={isOfficialDev === "blizzard" ? "blizzard_post" : ''}
           dangerouslySetInnerHTML={createMarkup(body_html)}/>
        {renderReplies(comment)}
      </div>
  )
};

export default CommentBody;

CommentBody.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    created_utc: PropTypes.number,
    score: PropTypes.number
  }),
  isOfficialDev: PropTypes.oneOfType([
    PropTypes.string,
    null
  ])
};