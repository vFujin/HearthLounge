import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import Topbar from './topbar';
import NotFound from '../../../shared-assets/not-found';
import Content from './content';
import * as types from "../../../../redux/types/reddit";
import Loader from "../../../../components/loader";
import 'react-treeview/react-treeview.css';

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
    clearActivePost(null);
  }

  render() {
    const {activePost} = this.props;
    const {loading, error, post} = activePost;

    if (loading) return <Loader/>;
    if (!loading && error) return <NotFound page={`reddit/post/${this.props.params.id}`} redirect="reddit/posts"/>;
    return (
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
    clearActivePost: payload => dispatch({
      type: types.CLEAR_REDDIT_POST, payload
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);