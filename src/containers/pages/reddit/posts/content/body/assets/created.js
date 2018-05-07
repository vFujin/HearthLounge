import React from 'react';
import {wrapDate} from "../../../../../../../utils/wrap-date";

const RedditPostCreated = ({post}) => {
  const {created_utc, edited} = post;

  return (
    <div className="redditPosts__snippet--created">
      {wrapDate(created_utc, edited)}
    </div>
  )
};

export default RedditPostCreated;