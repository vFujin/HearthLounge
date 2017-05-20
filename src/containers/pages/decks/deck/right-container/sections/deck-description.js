import React from 'react';
import PropTypes from 'prop-types';

const DeckDescription = ({currentDeck}) =>{
  const {title, description} = currentDeck;
  return (
      <div className="container__details--section container__details--description">
        <div className="section__header">
          <div className="line"></div>
          <h1>{title}</h1>
        </div>
        <div className="section__body">
          <div className="section__body--background">{description}</div>
        </div>
      </div>
  )
};

export default DeckDescription;

DeckDescription.propTypes = {
  currentDeck: PropTypes.object
};