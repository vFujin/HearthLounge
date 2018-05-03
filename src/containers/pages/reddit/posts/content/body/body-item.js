import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  checkDomain,
  checkIfBlizzardPost,
  checkIfStickied,
  checkTopbarIconFilters,
  stripDomains
} from "../../../utils/posts";
import Icon from "../../../../../../components/icon";
import {wrapDate} from "../../../../../../utils/wrap-date";

const RedditPostsBodyItem = ({post, handlePostClick}) => {
  const {id, domain, ups, num_comments, title, created, edited} = post;
  console.log(domain);
  return (
      <li id={id}
          className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)}`}
          onClick={handlePostClick}>
        <Link to={checkDomain(post)}>
          <div className="redditPosts__snippet--upvotes">{ups}</div>
          <div className="redditPosts__snippet--domain">
            <Icon type="reddit" domain={domain} linkFlairText={post.link_flair_text}/>
          </div>
          <div className="redditPosts__snippet--comments">{num_comments}</div>
          <div className="redditPosts__snippet--title">{_.unescape(title)}</div>
          <div className="redditPosts__snippet--created">{wrapDate(created, edited)}</div>
        </Link>
      </li>
  )
};

RedditPostsBodyItem.propTypes = {
  handlePostClick: PropTypes.func.isRequired,
  post: PropTypes.object
};

export default RedditPostsBodyItem;