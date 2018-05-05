import React from 'react';
import { connect } from "react-redux";
import Loader from '../../../../../components/loaders/loader';
import {renderComment} from "../../utils/render-comment";

const PostComments = ({activePost}) =>{
  const {post, comments} = activePost;
  return (
      <div className="container__details--section container__details--comments">
        <div className="section__header">
          <div className="line"/>
          <h1>{post.num_comments} {post.num_comments === 1 ? "comment" : "comments"}</h1>
        </div>
        <div className="section__body">
          <div className="comments">
            {comments.loading ? <Loader /> : comments.all.map((comment, i) => renderComment(comment, comments, i))}
          </div>
        </div>
      </div>
  )
};

const mapStateToProps = state => {
  const { activePost } = state.redditPosts;
  return { activePost };
};

export default connect(mapStateToProps)(PostComments);
