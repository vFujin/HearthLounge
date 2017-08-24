import React from 'react';
import PostSnippet from './post-snippet/post'
const ForumBlock = ({posts}) => {

  const mapPosts = () => {
    return posts.map(post =>
      <PostSnippet key={post.id} post={post}/>
    )
  };

  return (
      <ul>
        {mapPosts()}
      </ul>
  );
};

export default ForumBlock;