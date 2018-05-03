import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import 'whatwg-fetch';
import Topbar from './topbar';
import Content from './content/content';
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../../redux/reddit/posts/types";
import '../styles/reddit-styles.css';

class RedditPosts extends Component {
  componentDidMount() {
    const {posts, updatePosts, match} = this.props;
    const {category} = match.params;

    document.title=`r/hearthstone - ${_.startCase(category)}`;

    if(posts.loading) {
      updatePosts("hot");
    }

    if(category !== "hot") {
      updatePosts(category);
    }
  }

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
    const {match, activePost, filteredPosts} = this.props;
    const {domain, category} = match.params;
    return (
        <div className="container__page container__page--oneSided subreddit">
          <div className="container__page--inner">
            <Topbar domain={domain}
                    handleCategoryClick={this.handleCategoryClick}
                    category={category || "hot"}/>
            <Content domain={domain}
                     filteredPosts={filteredPosts}
                     activePostPermalink={activePost}/>
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
    toggleDomainFilter: (activeDomainFilter) => dispatch({
      type: 'TOGGLE_DOMAIN_FILTER', activeDomainFilter
    }),
    toggleCategoryFilter: (activeCategoryFilter) => dispatch({
      type: 'TOGGLE_CATEGORY_FILTER', activeCategoryFilter
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPosts);