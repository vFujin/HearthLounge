import React from 'react';
import {Link} from 'react-router';
import {supported_domain_icons} from '../domain-icons';

const RedditPostsTopbar = props => {


  return (
      <div className="subreddit-posts-topbar">
        <ul>
        {supported_domain_icons.map((domain, index)=>
          <li key={domain}>
            <Link to={{pathname: 'reddit', query: Object.assign({}, props.query, {...props.query, domain: domain})}}>
              <span className={`hs-icon icon-${domain} ${domain} ${domain === props.location.query.domain ? "active" : ""}`}></span>
              <div className="tooltip">
                <div className="caret-up"></div>
                <p>{domain}</p>
              </div>
            </Link>
          </li>
        )}
        </ul>
      </div>
  )
};

export default RedditPostsTopbar;