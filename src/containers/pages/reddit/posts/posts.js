import React from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import PostSelection from './right-container/post-selection';

const RedditPosts = () => {
  return (
      <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <Sidebar/>
          {/*{React.cloneElement(sidebar, {*/}
            {/*handleTabmenuClick: this.handleFilterClick.bind(this),*/}
            {/*active_tabmenu: this.state.active_tabmenu,*/}
            {/*active_domain_filter: this.state.active_domain_filter*/}
          {/*})}*/}
        </div>
        <div className="container__page--inner container__page--right">
            <Topbar/>
            {/*{React.cloneElement(topbar, {*/}
              {/*active_tabmenu: this.state.active_tabmenu,*/}
              {/*active_domain_filter: this.state.active_domain_filter*/}
            {/*})}*/}
          <div className="content">
            <PostSelection />
            {/*{React.cloneElement(main, {*/}
              {/*posts: this.state.posts,*/}
              {/*post_permalink: this.state.post_permalink,*/}
              {/*handleRedditPostClick: this.handleRedditPostClick.bind(this)*/}
            {/*})}*/}
          </div>
        </div>
      </div>
  )
};

export default RedditPosts;

RedditPosts.propTypes = {
  posts: PropTypes.array,
  post_permalink: PropTypes.string,
  active_post: PropTypes.string,
  handleReditPostClick: PropTypes.func,
  active_tabmenu: PropTypes.string,
  handleTabmenuClick: PropTypes.func
};