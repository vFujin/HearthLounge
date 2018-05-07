import React from 'react';
import PropTypes from 'prop-types';
import {createMarkup} from '../../../utils/post';

const CommentBody = ({comment, isOfficialDev, renderComment}) =>{
  const {body_html, replies} = comment;

  const renderReplies = () => {
    if(replies){
      return replies.data.children.map(c => renderComment(c.data, replies))
    }
    else return [];
  };

  return (
      <div className="comment__body">
          <p className={isOfficialDev === "blizzard" ? "blizzard_post" : undefined}
             dangerouslySetInnerHTML={createMarkup(body_html)}/>
        {renderReplies()}
      </div>
  )
};

export default CommentBody;

CommentBody.propTypes = {
  comment: PropTypes.shape({
    body_html: PropTypes.string,
    replies: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }),
  isOfficialDev: PropTypes.oneOfType([
    PropTypes.string
  ]),
  renderComment: PropTypes.func
};