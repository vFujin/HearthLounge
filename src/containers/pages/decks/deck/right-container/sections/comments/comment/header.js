import React from 'react';
import MoreOptions from "../../../../../../../../components/more-options/more-options";
import {wrapDate} from "../../../../../../../../utils/wrap-date";

export const CommentHeader = ({authenticated, activeUserId, comment, handleCommentOptionsClick}) =>{
  const {created, patch, commentId, authorId} = comment;
  const commented = wrapDate(created / 1000);

  return (
    <div className="header">
      <div className="commented">{commented}</div>
      <div className="header-right">
        <div className="patch">{patch}</div>
        {authenticated && <MoreOptions commentId={commentId}
                                       activeUserId={activeUserId}
                                       authorId={authorId}
                                       handleCommentOptionsClick={handleCommentOptionsClick}/>}
      </div>
    </div>
  )
};
