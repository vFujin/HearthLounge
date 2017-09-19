import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import NotFound from '../../../shared-assets/not-found';

import 'react-treeview/react-treeview.css';

import Content from './content';
import * as types from "../../../../redux/types/reddit";

class RedditPost extends Component{

  componentDidMount(){
    const {updateActivePost, activePost, params} = this.props;
    const {id} = params;
    if(activePost.loading) {
      updateActivePost(id);
    }
  }

  componentWillUnmount(){
    // this.props.updatePostComments(null);
  }

  handleCollapseClick = (i) => {
    let [...collapsedComments] = this.props.collapsedComments;
    collapsedComments[i] = !collapsedComments[i];
  };

  render() {
    const {activePost} = this.props;
    // if(this.props.postComments && this.props.postComments.error){
    //   return <NotFound page={`reddit/post/${this.props.params.id}`} redirect="reddit/posts"/>
    // }
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">stuff</h3>
            <Sidebar/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar />
            <Content cards={this.props.cards}
                     collapsedComments={this.props.collapsedComments}
                     handleCollapseClick={this.handleCollapseClick}
                     activePost={activePost}/>
          </div>
        </div>
    )
  }
}


const mapStateToProps = (state) =>{
  const {activePost, collapsedComments} = state.redditPosts;
  return {activePost, collapsedComments};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivePost: payload => dispatch({
      type: types.FETCH_REDDIT_POST_REQUEST, payload
    }),
    updatePostComments: (postComments) => dispatch({
      type: 'UPDATE_POST_COMMENTS', postComments
    }),
    toggleCollapse: (collapsedComments) => dispatch({
      type:  'TOGGLE_POST_COMMENT', collapsedComments
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);

RedditPost.propTypes = {
  posts: React.PropTypes.array,
  params: React.PropTypes.object
};