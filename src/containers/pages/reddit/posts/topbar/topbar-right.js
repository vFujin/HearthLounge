import React, { Component } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';
import {categories} from "../../utils/posts";
import {fetchRedditPostsRequest, selectRedditCategory} from "../../../../../redux/reddit/posts/actions";
import Icon from "../../../../../components/icon";

class TopbarRight extends Component {
  handleCategoryClick = (e) => {
    const {updatePosts, selectRedditCategory, activeCategory} = this.props;
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
    const {activeCategory} = this.props;

    return (
      <ul className="topbar-right">
        {categories.map((category, i) =>
          <li key={i}
              onClick={e => this.handleCategoryClick(e)}
              id={category.name}>
            <Icon name={category.icon}
                  tooltip={true}
                  tooltipPlacement="bottom"
                  title={_.startCase(category.name)}
                  className={`mage ${category.name === activeCategory ? "active" : ""}`}/>
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { activeCategory } = state.redditPosts.posts;
  return { activeCategory };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePosts: (payload) => dispatch(fetchRedditPostsRequest(payload)),
    selectRedditCategory: category => dispatch(selectRedditCategory(category)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TopbarRight);