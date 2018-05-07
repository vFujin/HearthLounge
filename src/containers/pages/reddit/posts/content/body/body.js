import React, { Component } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';
import {fetchRedditPostCommentsRequest} from "../../../../../../redux/reddit/comments/actions";
import {UPDATE_ACTIVE_POST} from "../../../../../../redux/reddit/active-post/types";
import RedditPostsBodyItem from "./body-item";
import {checkIfBlizzardPost, checkIfStickied, stripDomains} from "../../../utils/posts";
import RedditPostsBodyItemMobile from "./body-item-mobile";

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

  mapPosts = (posts) => posts.map(post => {
    const {id, title} = post;
    const url = `/reddit/post/${id}/${_.kebabCase(title)}`;

    return (
      <li id={id}
          className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)} table-row`}
          onClick={this.handlePostClick}>
        <RedditPostsBodyItem post={post}
                             key={id}
                             url={url}
                             handlePostClick={this.handlePostClick}/>
      </li>
    )
  });

  mapMobilePosts = (posts) => posts.map(post => {
    const {id, title} = post;
    const url = `/reddit/post/${id}/${_.kebabCase(title)}`;

    return (
      <li id={id}
          className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)} table-row redditPosts__body--mobile`}
          onClick={this.handlePostClick}>
        <RedditPostsBodyItemMobile post={post}
                                   key={id}
                                   url={url}
                                   handlePostClick={this.handlePostClick}/>
      </li>
    )
  });

  filterPostsByDomain = (posts) => {
    return posts.all.filter(post => (
      typeof posts.domain.obj.name === "string"
        ? post.domain === posts.domain.obj.name
        : posts.domain.obj.name.includes(post.domain)
    ))
  };

  render() {
    const {posts, windowWidth} = this.props;
    const {domain} = posts;
    const allPosts = !_.isEmpty(domain.active) ? this.filterPostsByDomain(posts) : posts.all;

    return (
      <ul className="redditPosts__body">
        {windowWidth <= 815
          ? this.mapMobilePosts(allPosts)
          : this.mapPosts(allPosts)
        }
      </ul>
    )
  }
}

const mapStateToProps = state => {
  const {windowWidth} = state.app.windowSize;
  const { posts } = state.redditPosts;
  return {windowWidth, posts };
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