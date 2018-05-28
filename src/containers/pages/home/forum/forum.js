import React from 'react';
import PropTypes from 'prop-types';
import PostSnippet from './post-snippet/post'
import Loader from "../../../../components/loaders/diamond/loader";
import FetchError from "../../../../components/fetch-error";
const ForumBlock = ({posts, handleRedditPostClick}) => {
  const {loading, all} = posts;
  const mapPosts = () => {
    try{
      return all.slice(0, 6).map(post =>
          <PostSnippet key={post.id}
                       post={post}
                       handleRedditPostClick={handleRedditPostClick}/>
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

ForumBlock.propTypes = {
  posts: PropTypes.shape({
    loading: PropTypes.bool,
    all: PropTypes.arrayOf(PropTypes.object)
  }),
  handleRedditPostClick: PropTypes.func
};