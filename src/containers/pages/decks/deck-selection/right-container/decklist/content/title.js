import React from 'react';
import PropTypes from 'prop-types';
import Icon from "../../../../../../../components/icon";

const Title = ({playerClass, title, author}) =>{
  return (
        <div className="decks__decklist--snippet-title">
          <Icon name={playerClass} />
          <div className="name-details">
            <p className="title">{title}</p>
            <p className="author">created by {author}</p>
          </div>
        </div>
  )
};

Title.propTypes = {
  playerClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Title;