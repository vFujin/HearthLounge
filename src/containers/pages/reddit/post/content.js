import React from 'react';
import PropTypes from 'prop-types';

import PostDescription from './content/post-description';
import PostComments from './content/post-comments';

const Content = ({cards, collapsedComments, params, posts, postComments, toggleCollapse}) =>{

  return (
      <div className="content">
        <div className="container__details post">
          <PostDescription posts={posts}
                           params={params}/>
          <PostComments cards={cards}
                        collapsedComments={collapsedComments}
                        posts={posts}
                        params={params}
                        postComments={postComments}
                        toggleCollapse={toggleCollapse}/>
        </div>
      </div>
  )
};

export default Content;

Content.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.shape({
    id: PropTypes.string
  })
};
