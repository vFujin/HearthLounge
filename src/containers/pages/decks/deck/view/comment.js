import React from 'react';
export const Comment = () => {
  return (
    <div className="comment">
      <div className="author">
        <div className="avatar">
          <img src="http://lorempixel.com/50/50/cats/" alt="user avatar"/>
          {/*img must be 50x50*/}
        </div>
        <div className="name">Joe</div>
      </div>
      <div className="details">
        <div className="header">
          <div className="posted">1 hour ago</div>
          <div className="patch">Yogg Nerf</div>
        </div>
        <div className="body">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
        </div>
        <div className="footer">
          <div className="up">+</div>
          <div className="votes">69</div>
          <div className="down">-</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;