import React from 'react';
import { connect } from "react-redux";
import Icon from "../../../../components/icon";
import {wrapDate} from "../../../../utils/wrap-date";

const Topbar = ({activePost}) => {
  const {score, url, link_flair_text, author, created_utc, edited, id} = activePost.post;

  return (
      <div className="topbar">
        <div>{link_flair_text}</div>
        <div className="topbar__votes">
          <Icon name="circle-up" />
          <p>{score}</p>
        </div>
        <div className="topbar__author">
          <p>Posted by:</p>
          <div>
            <Icon name="reddit" />
            <a href={`https://www.reddit.com/user/${author}`} target="_blank" rel="noopener noreferrer">u/{author}</a>
          </div>
        </div>
        <div className="topbar__redirect">
          <a href={url} rel="noopener noreferrer" target="_blank">
            <p>View on Reddit</p>
            <Icon name="redirect" tooltip={true} title="View on Reddit"/>
          </a>
        </div>

        <div className="topbar__created">
          <p>Posted</p>
          {wrapDate(created_utc, edited)}
        </div>
        <div className="topbar__shortlink">
          <p>Shortlink</p>
          <p>https://redd.it/{id}</p>
        </div>
      </div>
  )
};

const mapStateToProps = state => {
  const { activePost } = state.redditPosts;
  return { activePost };
};

export default connect(mapStateToProps)(Topbar);
