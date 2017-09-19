import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FETCH_REDDIT_POSTS_REQUEST} from "../../../redux/types/reddit";

class Reddit extends Component {
  componentDidMount() {
    const {location, posts, updatePosts} = this.props;
    const {category} = location.query;
    let categoryQuery = category || "hot";
    if(posts.loading) {
      updatePosts(categoryQuery);
    }
  }

  render() {
    const {cards, children, posts } = this.props;
      return React.cloneElement(children, {
        cards,
        posts
      });
  }
}

const mapStateToProps = (state) =>{
  const {posts} = state.redditPosts;
  return {posts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: payload => dispatch({
      type: FETCH_REDDIT_POSTS_REQUEST, payload
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);

Reddit.propTypes = {
  posts: PropTypes.object
};