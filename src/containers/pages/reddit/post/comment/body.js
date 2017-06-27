import React from 'react';
import PropTypes from 'prop-types';
import {createMarkup} from '../../../../../utils/reddit/post';
import {findSubstring} from '../../../../../utils/find-substring';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import {Loader} from '../../../../../utils/loader';

const CommentBody = ({cards, comment, comments, isOfficialDev, renderComment}) =>{
  const {body_html} = comment;

  // const foo = () =>{
  //   if(body_html && comments.length > 0 && (body_html.includes('[[') && body_html.includes(']]'))){
  //     findSubstring(body_html, cards);
  //   }
  // };
  //
  // foo();
  const renderReplies = (comment) => {
    if(comment.replies){
      return comment.replies.data.children.map(c => {

        return renderComment(c.data)
      })
    }
    else return [];
  };



  return (
      <div className="comment__body">
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