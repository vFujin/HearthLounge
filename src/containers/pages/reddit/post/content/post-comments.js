import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../../../components/loaders/loader';
import {renderComment} from "../../utils/render-comment";

const PostComments = ({post, comments}) =>{
  return (
      <div className="container__details--section container__details--comments">
        <div className="section__header">
          <div className="line"></div>
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

export default PostComments;

PostComments.propTypes = {
  post: PropTypes.shape({
    num_comments: PropTypes.number
  }),
  comments: PropTypes.shape({
    loading: PropTypes.bool,
    all: PropTypes.arrayOf(PropTypes.object)
  })
};