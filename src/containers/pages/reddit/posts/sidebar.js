import React, {Component} from 'react';
export class RedditPostsSidebar extends Component {
  render() {
    return (
        <div>
          <h3 className="filter-header">Filters</h3>
          <button>Hot</button>
          <button>New</button>
          <button>Rising</button>
          <button>Controversial</button>
          <button>Top</button>
        </div>
    )
  }
}