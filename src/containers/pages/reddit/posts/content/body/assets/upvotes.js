import React from 'react';
import Icon from "../../../../../../../components/icon";

const RedditPostUpvotes = ({post}) => {
  const {ups} = post;

  return (
    <div className="redditPosts__snippet--upvotes redditPosts__snippet--hasIcon">
      <Icon name="circle-up" />
      <p>{ups}</p>
    </div>
  )
};

export default RedditPostUpvotes;