import React from 'react';
import { connect } from 'react-redux';

const RedditPostsTopbar = () => {
  return (
    <ul className="redditPosts__topbar"></ul>
  )
};

const mapStateToProps = state => {
  // const {  } = state.
  // return {  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //     : payload => dispatch((payload))
  // }
};

RedditPostsTopbar.propTypes = {};
RedditPostsTopbar.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPostsTopbar);