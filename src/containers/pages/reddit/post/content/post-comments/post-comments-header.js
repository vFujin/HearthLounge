import React from 'react'
import { connect } from "react-redux";

const PostCommentsHeader = ({post}) => {
  return (
    <div className="section__header">
      <div className="line"/>
      <h1>{post.num_comments} {post.num_comments === 1 ? "comment" : "comments"}</h1>
    </div>
  )
};

const mapStateToProps = state => {
  const { post } = state.redditPosts.activePost;
  return { post };
};

export default connect(mapStateToProps)(PostCommentsHeader);