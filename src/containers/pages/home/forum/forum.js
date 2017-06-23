import React from 'react';
import { Link } from 'react-router';
import PostSnippet from './post-snippet/post'
const ForumBlock = () => {
  return (
      <div>
        <Link to={'/forum'}>
          <div className="header">Recent Discussion</div>
        </Link>
        <PostSnippet/>
        <PostSnippet/>
        <PostSnippet/>
        <PostSnippet/>
        <PostSnippet/>
      </div>
  );
};

export default ForumBlock;