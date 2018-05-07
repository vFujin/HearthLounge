import React from 'react';
import PostCommentsHeader from './post-comments-header';
import PostCommentsBody from './post-comments-body';

import './comment/styles.css';

const PostComments = () => (
  <div className="container__details--section container__details--comments">
    <PostCommentsHeader/>
    <PostCommentsBody/>
  </div>
);
export default PostComments;
