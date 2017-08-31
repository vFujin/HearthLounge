import React from 'react';
import PostSnippet from './post-snippet/post'
import Loader from "../../../../components/loader";
import FetchError from "../../../../components/fetch-error";
const ForumBlock = ({posts}) => {
  const {loading, all} = posts;
  const mapPosts = () => {
    try{
      return all.slice(0, 6).map(post =>
          <PostSnippet key={post.id} post={post}/>
      )
    }
    catch (error){
      return <FetchError />
    }
  };

  return (
      <ul>
        {loading ? <Loader theme="light"/> : mapPosts()}
      </ul>
  );
};

export default ForumBlock;