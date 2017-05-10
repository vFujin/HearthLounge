import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const TitleCell = ({el, deckUrl, hsClass, title, author}) =>{
  return (
      <td className={el} key={el}>
        <Link to={deckUrl}>
          <span className={`hs-icon icon-${hsClass}`}></span>
          <div className="name-details">
            <p className="title">{title}</p>
            <p className="author">created by {author}</p>
          </div>
        </Link>
      </td>
  )
};

TitleCell.propTypes = {
  el: PropTypes.string,
  deckUrl: PropTypes.string,
  hsClass: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
};

export default TitleCell;