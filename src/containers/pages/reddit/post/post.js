import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import NotFound from '../../../shared-assets/not-found';

import 'react-treeview/react-treeview.css';

import Content from './content';

class RedditPost extends Component{

  componentDidMount(){
    fetch(`https://www.reddit.com/r/hearthstone/comments/${this.props.params.id}.json`)
        .then(res => res.json())
        .then(res=>{
          if(res.error && res.error === 404){
            this.props.updatePostComments({error: res.error});
          } else {
            const comments = res[1].data.children.map(obj => obj.data);
            this.props.updatePostComments(comments);
          }
        });

  }

  componentWillUnmount(){
    this.props.updatePostComments(null);
  }

  handleCollapseClick = (i) => {
    let [...collapsedComments] = this.props.collapsedComments;
    collapsedComments[i] = !collapsedComments[i];
  };

  render() {
    if(this.props.postComments && this.props.postComments.error){
      return <NotFound page={`reddit/post/${this.props.params.id}`} redirect="reddit/posts"/>
    }
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar />
            <Content cards={this.props.cards}
                     collapsedComments={this.props.collapsedComments}
                     handleCollapseClick={this.handleCollapseClick}
                     posts={this.props.posts}
                     postComments={this.props.postComments}
                     params={this.props.params}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) =>{
  const {postComments, collapsedComments} = state.redditPosts;
  return {postComments, collapsedComments};
};

const mapDispatchToProps = (dispatch) => {
  return {
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