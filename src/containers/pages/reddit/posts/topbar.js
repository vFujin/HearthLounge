import React from 'react';
import {supported_domain_icons} from '../domain-icons';

const RedditPostsTopbar = () => {
  return (
      <div>
        <ul>
        {supported_domain_icons.map(domain =>
          <li key={domain}>
            <span className={`hs-icon icon-${domain}`}></span>
          </li>
        )}
        </ul>
      </div>
  )
};

export default RedditPostsTopbar;