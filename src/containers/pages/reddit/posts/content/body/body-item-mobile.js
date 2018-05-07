import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';
import PropTypes from 'prop-types';
import RedditPostUpvotes from './assets/upvotes';
import RedditPostTitle from './assets/title';
import RedditPostComments from "./assets/comments";
import RedditPostCreated from "./assets/created";

const RedditPostsBodyItemMobile = ({post}) => {
  const {id, title, selftext} = post;

  return (
    <Link to={`/reddit/post/${id}/${_.kebabCase(title)}`}>
      <div className="redditPosts__snippet--header">
        <RedditPostTitle post={post}/>
        <RedditPostCreated post={post}/>
      </div>
      <div className="redditPosts__snippet--body">
        {selftext}
      </div>
      <div className="redditPosts__snippet--footer">
        <RedditPostComments post={post}/>
        <RedditPostUpvotes post={post}/>
      </div>
    </Link>
  )
};

RedditPostsBodyItemMobile.propTypes = {
  post: PropTypes.object
};

export default RedditPostsBodyItemMobile;