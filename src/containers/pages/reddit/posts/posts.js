import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import PostSelection from './right-container/post-selection';

const RedditPosts = ({posts, location, activePost, updatePosts, updateActivePost, activeCategoryFilter, toggleCategoryFilter}) => {


  const handlePostClick = (activePost) =>{
    updateActivePost(activePost);
    
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();
    let filter = e.currentTarget.id;
    if(filter !== activeCategoryFilter){
      fetch(`https://www.reddit.com/r/hearthstone/${filter}.json`)
        .then(res => res.json())
        .then(res=>{
            const posts = res.data.children.map(obj => obj.data);
            console.log(posts);
            updatePosts(posts);
          });
      toggleCategoryFilter(filter)
    }
  };

    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar handleCategoryClick={handleCategoryClick}/>
            {/*{React.cloneElement(sidebar, {*/}
            {/*handleTabmenuClick: this.handleFilterClick.bind(this),*/}
            {/*active_tabmenu: this.state.active_tabmenu,*/}
            {/*active_domain_filter: this.state.active_domain_filter*/}
            {/*})}*/}
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar location={location}/>
            {/*{React.cloneElement(topbar, {*/}
            {/*active_tabmenu: this.state.active_tabmenu,*/}
            {/*active_domain_filter: this.state.active_domain_filter*/}
            {/*})}*/}

            <PostSelection posts={posts}
                           activePostPermalink={activePost}
                           handlePostClick={handlePostClick()}/>

          </div>
        </div>
    )
};

const mapStateToProps = (state) =>{
  const {posts, activePost, activeCategoryFilter} = state.redditPosts;
  return {posts, activePost, activeCategoryFilter};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (posts) => dispatch({
      type: 'UPDATE_POSTS', posts
    }),
    updateActivePost: (activePost) => dispatch({
      type: 'UPDATE_ACTIVE_POST', activePost
    }),
    toggleDomainFilter: (activeDomainFilter) => dispatch({
      type: 'TOGGLE_DOMAIN_FILTER', activeDomainFilter
    }),
    toggleCategoryFilter: (activeCategoryFilter) => dispatch({
      type: 'TOGGLE_DOMAIN_FILTER', activeCategoryFilter
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPosts);