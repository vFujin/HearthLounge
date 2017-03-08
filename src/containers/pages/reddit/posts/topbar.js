import React from 'react';
import {Link} from 'react-router';
import {supported_domain_icons} from '../domain-icons';

const RedditPostsTopbar = props => {
console.log(props);
  let query = props.location.query.domain;

  function checkIcon(domain){
    if(domain === "bubbles2"){
      return "hearthstone"
    }
    else return domain;
  }
  return (
      <div className="subreddit-posts-topbar">
        <ul>
        {supported_domain_icons.map((domain, index)=>
          <li key={domain}>
            <Link to={{pathname: 'reddit', query: {category: props.active_tabmenu, domain: domain}}}>
              <span className={`hs-icon icon-${domain} ${domain} ${domain === query ? "active" : ""}`}></span>
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