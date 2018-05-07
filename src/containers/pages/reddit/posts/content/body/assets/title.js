import React from 'react';
import Icon from "../../../../../../../components/icon";
import _ from "lodash";

const RedditPostTitle = ({post}) => {
  const {title, domain, link_flair_text, author} = post;

  return (
    <div className="redditPosts__snippet--title">
      <Icon name={domain} type="reddit" domain={domain} linkFlairText={link_flair_text}/>
      <div className="name-details">
        <p className="title">{_.unescape(title)}</p>
        <p className="author">posted by <span><Icon name="reddit"/>{author}</span></p>
      </div>
    </div>
  )
};

export default RedditPostTitle;