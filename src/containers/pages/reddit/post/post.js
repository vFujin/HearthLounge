import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import Topbar from './topbar';
import NotFound from '../../../shared-assets/not-found';
import Content from './content';
import Loader from "../../../../components/loader";
import 'react-treeview/react-treeview.css';
import * as types from "../../../../redux/reddit/active-post/types";

class RedditPost extends Component {

  componentDidMount() {
    const {updateActivePost, activePost, params} = this.props;
    const {id} = params;

    if (activePost.loading) {
      updateActivePost(id);
    }
  }

  componentWillUnmount() {
    const {clearActivePost} = this.props;
    clearActivePost();
  }


  render() {
    const {activePost, params} = this.props;
    const {loading, error, post} = activePost;

    if (activePost.loading) return <Loader/>;
    else if (!loading && error) return <NotFound page={`reddit/post/${params.id}`} redirect="reddit/posts"/>;
    else return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Post Details</h3>
            <Sidebar post={post}/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar post={post}/>
            <Content cards={this.props.cards}
                     activePost={activePost}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  const {activePost} = state.redditPosts;
  return {activePost};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivePost: payload => dispatch({
      type: types.FETCH_REDDIT_POST_REQUEST, payload
    }),
    clearActivePost: () => dispatch({type: types.CLEAR_REDDIT_POST}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);