import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Sidebar from './sidebar';
import Topbar from './topbar';
import NotFound from '../../../../components/not-found/not-found';
import Content from './content';
import Loader from "../../../../components/loaders/loader";
import 'react-treeview/react-treeview.css';
import * as types from "../../../../redux/reddit/active-post/types";
import {fetchRedditPostRequest} from "../../../../redux/reddit/active-post/actions";

class RedditPost extends Component {

  componentDidMount() {
    const {updateActivePost, activePost, match, posts} = this.props;
    const {postId, postTitle} = match.params;
    document.title= _.startCase(postTitle);
    // const postFetched = posts.all.find(post => post.Id === postId);
    if (!activePost.post && !activePost.loading) {
      updateActivePost(postId);
    }
  }


  componentWillUnmount() {
    const {clearActivePost} = this.props;
    clearActivePost();
  }

  render() {
    const {activePost, match} = this.props;
    const {loading, error, post} = activePost;

    if (activePost.loading && !activePost.post) return <Loader/>;
    if (!loading && error) return <NotFound page={`reddit/post/${match.params.postId}`} redirect="reddit/posts"/>;

      return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Post Details</h3>
            { activePost.loading && !activePost.post && <Loader theme="light"/> }
            { !activePost.loading && activePost.post && <Sidebar post={post}/> }
          </div>
          { activePost.loading && !activePost.post && <Loader /> }
          { !activePost.loading && activePost.post && (
            <div className="container__page--inner container__page--right">
              <Topbar post={post}/>
              <Content cards={this.props.cards}
                       activePost={activePost}/>
            </div>
          )}

        </div>
      )
  }
}

const mapStateToProps = (state) =>{
  const {activePost, posts} = state.redditPosts;
  return {activePost, posts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivePost: payload => dispatch(fetchRedditPostRequest(payload)),
    clearActivePost: () => dispatch({type: types.CLEAR_REDDIT_POST}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);