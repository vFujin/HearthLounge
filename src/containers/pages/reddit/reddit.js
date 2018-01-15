import React, {Component} from 'react';
import {Route} from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import RedditPosts from './posts/posts';
import {fetchRedditPostsRequest} from "../../../redux/reddit/posts/actions";

class Reddit extends Component {
  componentDidMount() {
    document.title = "r/hearthstone - Hot";
    const {posts, updatePosts} = this.props;
    if(posts.loading) {
      updatePosts("hot");
    }
  }

  render() {
    return <Route path="/reddit" component={RedditPosts} />
  }
}

const mapStateToProps = (state) =>{
  const {posts} = state.redditPosts;
  return {posts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: payload => dispatch(fetchRedditPostsRequest(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reddit);

Reddit.propTypes = {
  posts: PropTypes.object
};