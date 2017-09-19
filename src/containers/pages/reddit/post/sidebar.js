import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({post}) => {
  const {link_flair_text, author, created, id} = post;

  return (
      <ul className="sidebar__body">
        <li>
          <p>link_flair_text: {link_flair_text}</p>
          <p>author: <a href={`https://www.reddit.com/user/${author}`} target="_blank" rel="noopener noreferrer">u/{author}</a></p>
          <p>created: {created}</p>
          <p>shortlink: https://redd.it/{id}</p>
        </li>
      </ul>
  )
};

export default Sidebar;

Sidebar.propTypes = {
  post: PropTypes.shape({
    link_flair_text: PropTypes.string,
    author: PropTypes.string,
    created: PropTypes.number,
    id: PropTypes.string,
  })
};