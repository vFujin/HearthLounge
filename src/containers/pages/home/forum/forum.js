import React from 'react';
import { Link } from 'react-router';
import PostSnippet from './post-snippet/post'
const ForumBlock = () => {
  return (
      <li className={'home__block forum block-width-1'}>
        <Link to={'/forum'}>
          <div className="header">Recent Discussion</div>
        </Link>
        <PostSnippet/>
        <PostSnippet/>
        <PostSnippet/>
        <PostSnippet/>
        <PostSnippet/>
      </li>
  );
};

export default ForumBlock;