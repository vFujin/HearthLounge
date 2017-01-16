import React from 'react';
export const Comment = () => {
  return (
    <div className="comment">
      <div className="user-details">
        <div className="comment-avatar">
          <img src="http://lorempixel.com/50/50/cats/" alt="user avatar"/>
        </div>
        <div className="comment-author">Joe</div>
      </div>
      <div className="comment-details">
        <div className="comment-details_header">
          <div className="comment-posted">1 godzinę temu</div>
          <div className="comment-patch">Nerf Yogga</div>
        </div>
        <div className="comment-details_body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
        </div>
        <div className="comment-details_footer">
          <div className="up">+</div>
          <div className="number">69</div>
          <div className="down">-</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;