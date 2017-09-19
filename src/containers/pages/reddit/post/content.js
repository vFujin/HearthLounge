import React from 'react';
import PropTypes from 'prop-types';
import Post from './content/post';
import PostComments from './content/post-comments';

const Content = ({cards, activePost, renderComment}) => {
  const {post, comments} = activePost;
  return (
      <div className="content scrollable">
        <div className="container__details post">
          <Post post={post}/>
          <PostComments cards={cards}
                        post={post}
                        comments={comments}
                        renderComment={renderComment}/>
        </div>

      </div>
  )
};

export default Content;

Content.propTypes = {
  cards: PropTypes.array,
  activePost: PropTypes.shape({
    post: PropTypes.object,
    comments: PropTypes.object
  }),
  renderComment: PropTypes.func
};
