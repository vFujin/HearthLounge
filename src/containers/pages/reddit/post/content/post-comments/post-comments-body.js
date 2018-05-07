import React from 'react';
import {connect} from "react-redux";
import {renderComment} from "../../../utils/render-comment";
import Loader from "../../../../../../components/loaders/loader";

const PostCommentsBody = ({comments}) => {
  return (
    <div className="section__body">
      <div className="comments">
        {comments.loading
          ? <Loader />
          : comments.all.map((comment, i) => renderComment(comment, comments, i))
        }
      </div>
    </div>
  )
};


const mapStateToProps = state => {
  const { comments } = state.redditPosts.activePost;
  return { comments };
};

export default connect(mapStateToProps)(PostCommentsBody);