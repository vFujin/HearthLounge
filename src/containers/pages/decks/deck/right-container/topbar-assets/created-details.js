import React from 'react';
import PropTypes from 'prop-types';
import {timeDifference} from '../../../../../../utils/unix-to-date';

const CreatedDetails = ({activeDeck}) =>{
  const {patch, created} = activeDeck;

  return (
      <div className="created-details">
        <p>{patch}</p>
        <p>{timeDifference(created)}</p>
      </div>
  )
};

export default CreatedDetails;

CreatedDetails.propTypes = {
  activeDeck: PropTypes.object
};