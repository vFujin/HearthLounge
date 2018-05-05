import React from 'react';
import PostText from './post-text'
import PostTitle from './post-title'

const Post = () => (
  <div className="container__details--section container__details--description">
    <PostTitle />
    <PostText />
  </div>
);

export default Post;