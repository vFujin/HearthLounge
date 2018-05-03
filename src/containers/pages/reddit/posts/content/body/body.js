import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchRedditPostCommentsRequest} from "../../../../../../redux/reddit/comments/actions";
import {UPDATE_ACTIVE_POST} from "../../../../../../redux/reddit/active-post/types";
import RedditPostsBodyItem from "./body-item";

class RedditPostsBody extends Component {
  handlePostClick = (e) => {
    const {posts, updateActivePost, updatePostComments} = this.props;
    const {all} = posts;
    const postId = e.currentTarget.id;
    const post = all.find(p => p.id === postId);

    if(post) {
      updateActivePost(post);
      updatePostComments(post.id);
    }
  };

  mapPosts = () => this.props.posts.all.map(post => (
    <RedditPostsBodyItem post={post}
                         key={post.id}
                         handlePostClick={this.handlePostClick}/>
    )
  );

  render() {
    return (
      <ul className="redditPosts__body">
        {this.mapPosts()}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const { posts } = state.redditPosts;
  return { posts };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePostComments: payload => dispatch(fetchRedditPostCommentsRequest(payload)),
    updateActivePost: payload => dispatch({
      type: UPDATE_ACTIVE_POST, payload
    }),
  }
};

RedditPostsBody.propTypes = {};
RedditPostsBody.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPostsBody);