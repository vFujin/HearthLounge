import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import _ from 'lodash';
import {wrapDate} from "../../../../../utils/wrap-date";
import {stripDomains} from "../../../../../utils/reddit/posts";
import Icon from "../../../../../components/icon";

const PostSnippet = ({post, handleRedditPostClick}) => {
  const {id, title, ups, domain, link_flair_text, num_comments, author, created} = post;
  return (
      <li className="post" onClick={()=>handleRedditPostClick(post)}>
        <Link to={`/reddit/post/${id}/${_.kebabCase(title)}`} className={`${stripDomains(post)}`}>
          <div className="upvotes">
            <Icon name="circle-up"/>
            <p>{ups}</p>
          </div>
          <div className="domain">
            <Icon name={domain}
                  type="reddit"
                  domain={domain}
                  linkFlairText={link_flair_text}/>
          </div>
          <div className="comments">
            <Icon name="bubbles2"/>
            <p>{num_comments}</p>
          </div>
          <div className="title">
            <p>{title}</p>
            <div className="created">
              {wrapDate(created, false, '', false)} by u/{author}
            </div>
          </div>
        </Link>
      </li>
  );
};

export default PostSnippet;

PostSnippet.propTypes = {
  posts: PropTypes.shape({
    loading: PropTypes.bool,
    all: PropTypes.arrayOf(PropTypes.object)
  }),
  handleRedditPostClick: PropTypes.func
};