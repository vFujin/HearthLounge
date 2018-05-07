import React from 'react';
import Icon from "../../../../../../../components/icon";

const RedditPostComments = ({post}) => {
  const {num_comments} = post;

  return (
    <div className="redditPosts__snippet--comments redditPosts__snippet--hasIcon">
      <Icon name="bubbles2" />
      <p>{num_comments}</p>
    </div>
  )
};

export default RedditPostComments;