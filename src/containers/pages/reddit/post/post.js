import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import 'whatwg-fetch';
import {Sidebar} from './sidebar';
import {Topbar} from './topbar';
import {filterPosts} from '../../../../utils/reddit/post'
class RedditPost extends Component{

  componentDidMount(){
    fetch(`https://www.reddit.com/r/hearthstone/comments/${this.props.params.id}.json`)
        .then(res => res.json())
        .then(res=>{
          const comments = res[1].data.children.map(obj => obj.data);
          this.props.updatePostComments(comments);
        });
  }


  render() {
    return (
        <div className="container__page container__page--twoSided subreddit list-with-filters-layout">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header">Filters</h3>
            <Sidebar/>
          </div>
          <div className="container__page--inner container__page--right">
            <Topbar />
            <div className="choosen-deck-view">
              <div className="choosen-deck-details">
                <div className="section description">
                  <div className="section-header"><h1>
                    <span>{this.props.posts.filter(x => x.id === this.props.params.id).map(x => x.title)[0]}</span></h1></div>
                  {filterPosts(this.props)}
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
};

const mapStateToProps = (state) =>{
  const {postComments} = state.redditPosts;
  return {postComments};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostComments: (postComments) => dispatch({
      type: 'UPDATE_POST_COMMENTS', postComments
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);

RedditPost.propTypes = {
  posts: React.PropTypes.array,
  params: React.PropTypes.object
};