import React from 'react';
import RedditHeaderItem from "./header-item";

const RedditPostsHeader = () => (
  <ul className="redditPosts__header">
    <RedditHeaderItem name="upvotes"/>
    <RedditHeaderItem name="domain"/>
    <RedditHeaderItem name="comments"/>
    <RedditHeaderItem name="title"/>
    <RedditHeaderItem name="created"/>
  </ul>
);

export default RedditPostsHeader;