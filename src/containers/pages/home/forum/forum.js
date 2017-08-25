import React from 'react';
import PostSnippet from './post-snippet/post'
import Loader from "../../../../components/loader";
const ForumBlock = ({posts}) => {

  const mapPosts = () => {
    return posts.map(post =>
      <PostSnippet key={post.id} post={post}/>
    )
  };

  return (
      <ul>
        {posts.length < 1 ? <Loader theme="light"/> : mapPosts()}
      </ul>
  );
};

export default ForumBlock;