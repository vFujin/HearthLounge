import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Topbar from './topbar/topbar';
import Content from './content/content';
import {fetchRedditPostsRequest, resetRedditState} from "../../../../redux/reddit/posts/actions";
import '../styles/reddit-styles.css';

class RedditPosts extends Component {
  componentDidMount() {
    const {posts, updatePosts} = this.props;
    const {activeCategory} = posts;
    document.title = `r/hearthstone - ${_.startCase(activeCategory)}`;

    if(!posts.all) {
      updatePosts("hot");
    }
  }

  componentWillUnmount(){
    this.props.resetRedditState();
  }

  render() {
    return (
        <div className="container__page container__page--oneSided subreddit">
          <div className="container__page--inner">
            <Topbar />
            <Content />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {posts, activeCategory} = state.redditPosts;
  return {posts, activeCategory};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (payload) => dispatch(fetchRedditPostsRequest(payload)),
    resetRedditState: () => dispatch(resetRedditState())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPosts);