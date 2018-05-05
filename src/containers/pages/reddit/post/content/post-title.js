import React from 'react';
import {connect} from "react-redux";

const PostTitle = ({activePost}) => {
  return (
    <div className="section__header">
      <div className="line"/>
      <h1>{activePost.post && activePost.post.title}</h1>
    </div>
  )
};

const mapStateToProps = state => {
  const { activePost } = state.redditPosts;
  return { activePost };
};

export default connect(mapStateToProps)(PostTitle);