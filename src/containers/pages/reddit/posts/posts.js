import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import 'whatwg-fetch';
import Topbar from './topbar/topbar';
import Content from './content/content';
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../../redux/reddit/posts/types";
import '../styles/reddit-styles.css';
import {
  resetRedditState,
  selectRedditCategory,
  selectRedditDomain
} from "../../../../redux/reddit/posts/actions";

class RedditPosts extends Component {
  componentDidMount() {
    const {posts, updatePosts} = this.props;
    const {activeCategory} = posts;
    document.title = `r/hearthstone - ${_.startCase(activeCategory)}`;

    if(!posts.all) {
      updatePosts("hot");
    }
  }

  handleDomainClick = (e, domainObj) => {
    const {selectRedditDomain, posts} = this.props;
    const {domain} = posts;
    const selectedDomain = e.currentTarget.id;

    if (selectedDomain !== domain.active) {
      selectRedditDomain({active: selectedDomain, obj: domainObj});
    }

    if(selectedDomain === domain.active) {
      selectRedditDomain({active: "", obj: {}});
    }
  };

  handleCategoryClick = (e) => {
    const {updatePosts, selectRedditCategory, posts} = this.props;
    const {activeCategory} = posts;
    const selectedCategory = e.currentTarget.id;

    if (selectedCategory !== activeCategory) {
      updatePosts(selectedCategory);
      selectRedditCategory(selectedCategory);
    }

    if(selectedCategory === activeCategory){
      updatePosts("hot");
      selectRedditCategory("hot");
    }
  };

  render() {
    return (
        <div className="container__page container__page--oneSided subreddit">
          <div className="container__page--inner">
            <Topbar
                    handleDomainClick={this.handleDomainClick}
                    handleCategoryClick={this.handleCategoryClick} />
            <Content />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {posts, activeCategory, activeDomain} = state.redditPosts;
  return {posts, activeCategory, activeDomain};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (payload) => dispatch({
      type: FETCH_REDDIT_POSTS_REQUEST, payload
    }),
    selectRedditDomain: domain => dispatch(selectRedditDomain(domain)),
    selectRedditCategory: category => dispatch(selectRedditCategory(category)),
    resetRedditState: () => dispatch(resetRedditState())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPosts);