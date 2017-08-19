import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const TitleCell = ({deckUrl, playerClass, title, author}) =>{
  return (
        <Link to={deckUrl}>
          <span className={`hs-icon icon-${playerClass}`}></span>
          <div className="name-details">
            <p className="title">{title}</p>
            <p className="author">created by {author}</p>
          </div>
        </Link>
  )
};

TitleCell.propTypes = {
  deckUrl: PropTypes.string,
  playerClass: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
};

export default TitleCell;