import React from 'react';
import PropTypes from 'prop-types';
import {filterPosts} from '../../../../../utils/reddit/post'

const PostDescription = ({posts, params}) =>{
  return (
    <div className="container__details--section container__details--description">
      <div className="section__header">
        <div className="line"></div>
        <h1>{posts.filter(post => post.id === params.id).map(post => post.title)[0]}</h1>
      </div>
      <div className="section__body">
        {filterPosts(posts, params)}
      </div>
    </div>
  )
};

export default PostDescription;

PostDescription.propTypes = {
  posts: PropTypes.array,
  params: PropTypes.shape({
    id: PropTypes.string
  })
};
