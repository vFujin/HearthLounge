import React from 'react';
import PostAnswers from './post-answers';
import PostDetails from './post-details';
const PostSnippet = () => {
  return (
      <li className="post">
        <PostDetails/>
        <PostAnswers/>
      </li>
  );
};

export default PostSnippet;