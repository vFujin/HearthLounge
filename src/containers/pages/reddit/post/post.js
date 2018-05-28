import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Topbar from './topbar';
import NotFound from '../../../../components/not-found/not-found';
import Content from './content';
import ContentMobile from './content-mobile';
import Loader from "../../../../components/loaders/diamond/loader";
import 'react-treeview/react-treeview.css';
import * as types from "../../../../redux/reddit/active-post/types";
import {fetchRedditPostRequest} from "../../../../redux/reddit/active-post/actions";
import './styles/styles.css';
import './styles/mobile-styles.css';
import MobileTopbar from "../../../../components/mobile/topbar/topbar";

class RedditPost extends PureComponent {
  state = {
    mobileActiveTab: "post"
  };

  componentDidMount() {
    const {updateActivePost, activePost, match} = this.props;
    const {postId, postTitle} = match.params;
    document.title= _.startCase(postTitle);

    if (!activePost.post && !activePost.loading) {
      updateActivePost(postId);
    }
  }

  componentWillUnmount() {
    const {clearActivePost} = this.props;
    clearActivePost();
  }

  handleMobileActiveTabSwitch = (e) => {
    const id = e.currentTarget.id;
    this.setState({mobileActiveTab: id})
  };

  render() {
    const {activePost, match, windowWidth} = this.props;
    const {loading, error} = activePost;

    if (activePost.loading && !activePost.post) return <Loader/>;
    if (!loading && error) return <NotFound page={`reddit/post/${match.params.postId}`} redirect="reddit/posts"/>;

    return (
      <div className="container__page container__page--oneSided subreddit subreddit__post">

        {activePost.loading && !activePost.post && <Loader/>}
        {!activePost.loading && activePost.post && (
          windowWidth > 815 ? (
              <div className="container__page--inner container__page--right">
                <Topbar/>
                <Content/>
              </div>
            )
            : (
              <div className="container__page--inner container__page--right">
                <MobileTopbar tabs={["post-details", "post", "comments"]}
                              activeMobileTab={this.state.mobileActiveTab}
                              handleTabClick={this.handleMobileActiveTabSwitch}/>
                <ContentMobile mobileActiveTab={this.state.mobileActiveTab}/>
              </div>
            )
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  const {windowWidth} = state.app.windowSize;
  const {activePost} = state.redditPosts;
  return {windowWidth, activePost};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivePost: payload => dispatch(fetchRedditPostRequest(payload)),
    clearActivePost: () => dispatch({type: types.CLEAR_REDDIT_POST}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RedditPost);