import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';
import PostSelection from './right-container/post-selection';
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../../redux/reddit/posts/types";
import {UPDATE_ACTIVE_POST} from "../../../../redux/reddit/active-post/types";
import {FETCH_REDDIT_POST_COMMENTS_REQUEST} from "../../../../redux/reddit/comments/types";

class RedditPosts extends Component {
  componentDidMount() {
    const {category} = this.props.match.params;
    if(category !== "hot") {
      this.props.updatePosts(category);
    }
  }

  handlePostClick = (id) => {
    const {posts, updateActivePost, updatePostComments} = this.props;
    const {all} = posts;
    if (all) {
      let post = all.find(p => p.id === id);
      updateActivePost(post);
      updatePostComments(post.id);
    }
  };

  handleCategoryClick = (e) => {
    e.preventDefault();

    const {updatePosts, toggleCategoryFilter, match} = this.props;
    const {category} = match.params;
    const filter = e.currentTarget.id;

    if (filter !== category) {
      updatePosts(filter);
      toggleCategoryFilter(filter);
    }
  };

  render() {
    const {posts, match, activePost, filteredPosts} = this.props;
    const {domain, category} = match.params;
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar category={category || "hot"} domain={domain} handleCategoryClick={this.handleCategoryClick}/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar domain={domain}
                    category={category || "hot"}/>
            <PostSelection posts={posts}
                           domain={domain}
                           filteredPosts={filteredPosts}
                           activePostPermalink={activePost}
                           handlePostClick={this.handlePostClick}/>

          </div>
        </div>
    )
  }
}

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
    updateActivePost: payload => dispatch({
      type: UPDATE_ACTIVE_POST, payload
    }),
    updatePostComments: payload => dispatch({
      type: FETCH_REDDIT_POST_COMMENTS_REQUEST, payload
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