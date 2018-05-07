import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import RedditPostUpvotes from './assets/upvotes';
import RedditPostTitle from './assets/title';
import RedditPostComments from "./assets/comments";
import RedditPostCreated from "./assets/created";

const RedditPostsBodyItem = ({post, url}) => {

  return (
    <Link to={url}>
      <RedditPostUpvotes post={post}/>
      <RedditPostTitle post={post}/>
      <RedditPostComments post={post}/>
      <RedditPostCreated post={post}/>
    </Link>
  )
};

RedditPostsBodyItem.propTypes = {
  post: PropTypes.object
};

export default RedditPostsBodyItem;