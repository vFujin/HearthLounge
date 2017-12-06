import React from 'react';
import MoreOptions from "../../../../../../../shared-assets/posts/more-options";
import {wrapDate} from "../../../../../../../../utils/wrap-date";

export const CommentHeader = ({authenticated, created, patch, commentId, handleCommentOptionsClick}) =>{
  const commented = wrapDate(created / 1000);

  return (
    <div className="header">
      <div className="commented">{commented}</div>
      <div className="header-right">
        <div className="patch">{patch}</div>
        {authenticated && <MoreOptions commentId={commentId} handleCommentOptionsClick={handleCommentOptionsClick}/>}
      </div>
    </div>
  )
};
