import React from 'react';
import PropTypes from 'prop-types';

const CreatedDetails = ({currentDeck}) =>{
  const {patch, created} = currentDeck;

  return (
      <div className="created-details">
        <p>{patch}</p>
        <p>{created}</p>
      </div>
  )
};

export default CreatedDetails;

CreatedDetails.propTypes = {
  currentDeck: PropTypes.object
};