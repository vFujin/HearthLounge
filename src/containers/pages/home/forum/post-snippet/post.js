import React from 'react';
import PostAnswers from './post-answers';
import PostDetails from './post-details';
const PostSnippet = () => {
  return (
      <div className="post">
        <PostDetails/>
        <PostAnswers/>
      </div>
  );
};

export default PostSnippet;