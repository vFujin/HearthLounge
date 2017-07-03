import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import 'whatwg-fetch';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import PostSelection from './right-container/post-selection';
import {stripDomains} from '../../../../utils/reddit/posts';
import {addQuery} from '../../../../utils/utils-router';

const RedditPosts = ({posts, location, activePost, updatePosts, filteredPosts, updateActivePost, updateFilteredPosts, activeCategoryFilter, activeDomainFilter, toggleDomainFilter, toggleCategoryFilter}) => {
  const {category, domain} = location.query;

  const handlePostClick = (activePost) =>{
    updateActivePost(activePost);
  };

  const handleCategoryClick = (e) => {
    e.preventDefault();

    let filter = e.currentTarget.id;
    if(filter !== category || filter !== activeCategoryFilter) {
      updatePosts([]);
      fetch(`https://www.reddit.com/r/hearthstone/${filter}.json`)
          .then(res => res.json())
          .then(res => {
            const posts = res.data.children.map(obj => obj.data);

            updatePosts(posts);
            if(domain){
              let filteredPosts = posts.filter(post=> stripDomains(post) === domain);
              updateFilteredPosts(filteredPosts)
            }

          });
      addQuery({category: [filter]});
      toggleCategoryFilter(filter);
    }
  };


  const handleDomainClick = (e) =>{
    let targetId = e.currentTarget.id;
    let targetDomain = targetId !== 'bubbles2' ? targetId : 'hearthstone';
    let filteredPosts = posts.filter(post=> stripDomains(post) === targetDomain);

    if(targetDomain === domain){
      browserHistory.push(`/reddit/posts?category=${activeCategoryFilter}`);
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
    updatePosts: (posts) => dispatch({
      type: 'UPDATE_POSTS', posts
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