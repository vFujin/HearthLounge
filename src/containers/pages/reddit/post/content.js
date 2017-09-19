import React from 'react';
import PropTypes from 'prop-types';

import Post from './content/post';
import PostComments from './content/post-comments';
import Loader from "../../../../components/loader";

const Content = ({cards, collapsedComments, handleCollapseClick, activePost, renderComment}) =>{
  const {post, comments, loading} = activePost;
  return (
      <div className="content scrollable">
        {
          loading
              ? <Loader/>
              : (
                  <div className="container__details post">
                    <Post post={post}/>
                    <PostComments cards={cards}
                                  collapsedComments={collapsedComments}
                                  handleCollapseClick={handleCollapseClick}
                                  post={post}
                                  comments={comments}
                                  renderComment={renderComment}/>
                  </div>
              )
        }

      </div>
  )
};

export default Content;

Content.propTypes = {
  cards: PropTypes.array,
  collapsedComments: PropTypes.array,
  handleCollapseClick: PropTypes.func,
  params: PropTypes.shape({
    id: PropTypes.string
  }),
  activePost: PropTypes.shape({
    post: PropTypes.object,
    comments: PropTypes.array
  }),
  renderComment: PropTypes.func
};
