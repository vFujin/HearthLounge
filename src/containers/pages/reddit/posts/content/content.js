import React, {Component} from 'react';
import { connect } from "react-redux";
import RedditPostsHeader from "./header/header";
import RedditPostsBody from "./body/body";
import './content-styles.css';
import Loader from "../../../../../components/loaders/loader";

class Content extends Component {
  render(){
    const {all, loading} = this.props.posts;
    return (
      <div className="content redditPosts">
        <RedditPostsHeader/>
        {loading && <Loader/>}

        {!loading && all && <RedditPostsBody />}

        {!loading && (!all || all.length === 0) && (
          <div>Couldn't find posts. Try again later.</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { posts } = state.redditPosts;
  return { posts };
};

export default connect(mapStateToProps)(Content);