import React from 'react';
import {Link} from "react-router-dom";
import _ from 'lodash';
import PropTypes from 'prop-types';
import {
  checkIfBlizzardPost,
  checkIfStickied,
  stripDomains
} from "../../../utils/posts";
import Icon from "../../../../../../components/icon";
import {wrapDate} from "../../../../../../utils/wrap-date";

const RedditPostsBodyItem = ({post, handlePostClick}) => {
  const {id, domain, ups, num_comments, title, author, created_utc, edited_utc, link_flair_text} = post;

  return (
      <li id={id}
          className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)}`}
          onClick={handlePostClick}>
        <Link to={`/reddit/post/${id}/${_.kebabCase(title)}`}>
          <div className="redditPosts__snippet--title">
            <Icon name={domain} type="reddit" domain={domain} linkFlairText={link_flair_text}/>
            <div className="name-details">
              <p className="title">{_.unescape(title)}</p>
              <p className="author">posted by <span><Icon name="reddit" />{author}</span></p>
            </div>
          </div>
          <div className="redditPosts__snippet--upvotes redditPosts__snippet--hasIcon">
            <Icon name="circle-up" />
            <p>{ups}</p>
          </div>
          <div className="redditPosts__snippet--comments redditPosts__snippet--hasIcon">
            <Icon name="bubbles2" />
            <p>{num_comments}</p>
          </div>
          <div className="redditPosts__snippet--created">{wrapDate(created_utc, edited_utc)}</div>
        </Link>
      </li>
  )
};

RedditPostsBodyItem.propTypes = {
  handlePostClick: PropTypes.func.isRequired,
  post: PropTypes.object
};

export default RedditPostsBodyItem;