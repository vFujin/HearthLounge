import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import 'whatwg-fetch';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import PostSelection from './right-container/post-selection';
import {stripDomains} from '../../../../utils/reddit/posts';
import {addQuery, removeQuery} from '../../../../utils/utils-router';
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../../redux/types/reddit";

const RedditPosts = ({posts, location, activePost, updatePosts, filteredPosts, updateActivePost, updateFilteredPosts, activeCategoryFilter, activeDomainFilter, toggleDomainFilter, toggleCategoryFilter}) => {
  const {category, domain} = location.query;
  const {all} = posts;

  const handlePostClick = (activePost) =>{
    updateActivePost(activePost);
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();

    let filter = e.currentTarget.id;
    if(filter !== category) {
      updatePosts(filter);
      addQuery({category: [filter]});
      toggleCategoryFilter(filter);
    }
  };

  const handleDomainClick = (e) =>{
    let targetId = e.currentTarget.id;
    let targetDomain = targetId !== 'bubbles2' ? targetId : 'hearthstone';
    let filteredPosts = all.filter(post=> stripDomains(post) === targetDomain);
    if(targetDomain === domain){
      // removeQuery("domain");
      if(category){
        browserHistory.push(`/reddit/posts?category=${category}`);
      } else {
        browserHistory.push(`/reddit/posts`);
      }
      toggleDomainFilter(null);
      updateFilteredPosts(null);
    } else {
      addQuery({domain: [targetDomain]});
      toggleDomainFilter(targetDomain);
      updateFilteredPosts(filteredPosts);
    }
  };

  return (
      <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
        <div className="container__page--inner container__page--left">
          <h3 className="sidebar__header">Filters</h3>
          <Sidebar category={category} handleCategoryClick={handleCategoryClick}/>
        </div>
        <div className="container__page--inner container__page--right">
          <Topbar location={location}
                  handleDomainClick={(e)=>handleDomainClick(e)}/>
          <PostSelection posts={posts}
                         location={location}
                         filteredPosts={filteredPosts}
                         activePostPermalink={activePost}
                         handlePostClick={handlePostClick()}/>

        </div>
      </div>
  )
};

const mapStateToProps = (state) =>{
  const {posts, activePost, activeCategoryFilter, activeDomainFilter} = state.redditPosts;
  return {posts, activePost, activeCategoryFilter, activeDomainFilter};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (payload) => dispatch({
      type: FETCH_REDDIT_POSTS_REQUEST, payload
    }),
    updateFilteredPosts: (filteredPosts) => dispatch({
      type: 'UPDATE_FILTERED_POSTS', filteredPosts
    }),
    updateActivePost: (activePost) => dispatch({
      type: 'UPDATE_ACTIVE_POST', activePost
    }),
    toggleDomainFilter: (activeDomainFilter) => dispatch({
      type: 'TOGGLE_DOMAIN_FILTER', activeDomainFilter
    }),
    toggleCategoryFilter: (activeCategoryFilter) => dispatch({
      type: 'TOGGLE_CATEGORY_FILTER', activeCategoryFilter
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPosts);