import React from 'react';
import Post from './content/post';
import PostComments from './content/comment/post-comments';

const Content = () => (
  <div className="content scrollable">
    <div className="container__details post">
      <Post />
      <PostComments />
    </div>
  </div>
);

export default Content;