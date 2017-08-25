import React from 'react';
import {Link} from 'react-router';
import _ from 'lodash';
// import Icon from "../../../reddit/domain-icons";
import {wrapDate} from "../../../../../utils/wrap-date";
import {stripDomains} from "../../../../../utils/reddit/posts";
import Icon from "../../../../../components/icon";

const PostSnippet = ({post}) => {
  const {title, author, created} = post;
  return (

      <li className="post">
        <Link to={`/reddit/post/${post.id}/${_.snakeCase(post.title)}`} className={`${stripDomains(post)}`}>
          <div className="upvotes">
            <span className="hs-icon icon-circle-up"></span>
            <p>{post.ups}</p>
          </div>
          <div className="domain">
            {/*<Icon link_flair_text={post.link_flair_text} domain={post.domain}/>*/}
            <Icon name={stripDomains(post.domain)}
                  type="reddit"
                  domain={stripDomains(post.domain)}
                  link_flair_text={post.link_flair_text}/>
          </div>
          <div className="comments">
            <span className="hs-icon icon-bubbles2"></span>
            <p>{post.num_comments}</p>
          </div>
          <div className="title">
            <p>{title}</p>
            <div className="created">
              {wrapDate(created, false, '', false)}
            </div>
          </div>
        </Link>
      </li>
  );
};

export default PostSnippet;