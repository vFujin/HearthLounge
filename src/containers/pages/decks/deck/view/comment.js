import React from 'react';
export const Comment = ({c}) => {
  let votes = c.upvotes - c.downvotes;
  return (
    <div className="comment">
      <div className="author">
        <div className="avatar">
          <img src="http://lorempixel.com/50/50/cats/" alt="user avatar"/>
          {/*img must be 50x50*/}
        </div>
        <div className="name">{c.author}</div>
      </div>
      <div className="details">
        <div className="header">
          <div className="posted">{c.created}</div>
          <div className="patch">{c.patch}</div>
        </div>
        <div className="body">
          {c.text}
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