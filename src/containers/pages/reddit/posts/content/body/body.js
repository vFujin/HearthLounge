import React, { Component } from 'react';
import _ from "lodash";
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

  mapPosts = (posts) => posts.map(post => (
    <RedditPostsBodyItem post={post}
                         key={post.id}
                         handlePostClick={this.handlePostClick}/>
    )
  );

  filterPostsByDomain = (posts) => {
    return posts.all.filter(post => (
      typeof posts.domain.obj.name === "string"
        ? post.domain === posts.domain.obj.name
        : posts.domain.obj.name.includes(post.domain)
    ))
  };

  render() {
    const {posts} = this.props;
    const {domain} = posts;
    const allPosts = !_.isEmpty(domain.active) ? this.filterPostsByDomain(posts) : posts.all;

    return (
      <ul className="redditPosts__body">
        {this.mapPosts(allPosts)}
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