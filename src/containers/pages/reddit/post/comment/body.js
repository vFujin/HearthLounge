import React from 'react';
import PropTypes from 'prop-types';
import {createMarkup} from '../../../../../utils/reddit/post';
// import {findSubstring} from '../../../../../utils/find-substring';
// import _ from 'lodash';
// import Tooltip from 'antd/lib/tooltip';

const CommentBody = ({comment, comments, isOfficialDev, renderComment}) =>{
  const {body_html, replies} = comment;

  const renderReplies = () => {
    if(replies){
      return replies.data.children.map(c => renderComment(c.data))
    }
    else return [];
  };

  return (
      <div className="comment__body">
          <p className={isOfficialDev === "blizzard" ? "blizzard_post" : ''}
             dangerouslySetInnerHTML={createMarkup(body_html)}/>
        {renderReplies()}
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