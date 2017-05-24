import React from 'react';
import {timeDifference} from '../../../../../utils/unix-to-date';
import MoreOptions from '../../../../shared-assets/posts/more-options';
import Tooltip from 'antd/lib/tooltip';

export const Comment = ({comment}) => {
  const {upvotes, downvotes, created, author, patch, text} = comment;
  let votes = upvotes - downvotes;
  let commented = timeDifference(created, false);
  let detailedDate = timeDifference(created, true);

  return (
    <div className="comment">
      <div className="author">
        <div className="avatar">
          <img src="http://lorempixel.com/50/50/cats/" alt="user avatar"/>
          {/*img must be 50x50*/}
        </div>
        <div className="name">{author}</div>
      </div>
      <div className="details">
        <div className="header">
          <Tooltip title={detailedDate} placement="right">
            <div className="commented">{commented}</div>
          </Tooltip>
          <div className="header-right">
            <div className="patch">{patch}</div>
            <MoreOptions/>
          </div>
        </div>
        <div className="body">
          {text}
        </div>
        <div className="footer">
          <div className="up peripheral">+</div>
          <div className="votes peripheral">{votes}</div>
          <div className="down peripheral">-</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;