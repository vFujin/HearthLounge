import React from 'react';
import {timeDifference} from '../../../../../utils/unix-to-date';

export const Comment = ({comment}) => {
  let votes = comment.upvotes - comment.downvotes;
  return (
    <div className="comment">
      <div className="author">
        <div className="avatar">
          <img src="http://lorempixel.com/50/50/cats/" alt="user avatar"/>
          {/*img must be 50x50*/}
        </div>
        <div className="name">{comment.author}</div>
      </div>
      <div className="details">
        <div className="header">
          <div className="posted">{timeDifference('comment', comment.created)}</div>
          <div className="patch">{comment.patch}</div>
        </div>
        <div className="body">
          {comment.text}
        </div>
        <div className="footer">
          <div className="up">+</div>
          <div className="votes">{votes}</div>
          <div className="down">-</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;