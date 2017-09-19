import React from 'react';
import PropTypes from 'prop-types';
import {content} from '../../../../../utils/reddit/post'

const Post = ({post}) =>{
  const {title} = post;
  return (
    <div className="container__details--section container__details--description">
      <div className="section__header">
        <div className="line"></div>
        <h1>{title}</h1>
      </div>
      <div className="section__body">
        {content(post)}
      </div>
    </div>
  )
};

export default Post;

Post.propTypes = {
  post: PropTypes.object,
};
