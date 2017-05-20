import React from 'react';
import PropTypes from 'prop-types';

const CreatedDetails = ({currentDeck}) =>{
  return (
      <div>
        <p>{currentDeck.patch}</p>
        <p>{currentDeck.created}</p>
      </div>
  )
};

export default CreatedDetails;

CreatedDetails.propTypes = {
  currentDeck: PropTypes.object
};