import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import {timeDifference} from '../../../../../../utils/unix-to-date';

const CreatedDetails = ({activeDeck}) =>{
  const {patch, created, updated} = activeDeck;
  const tooltip = updated && <Tooltip title={`Updated ${timeDifference(updated)}`} placement="bottomLeft" arrowPointAtCenter>*</Tooltip>;

  return (
      <div className="created-details">
        <p>{patch}</p>
        <p>{timeDifference(created)} {tooltip}</p>
      </div>
  )
};

export default CreatedDetails;

CreatedDetails.propTypes = {
  activeDeck: PropTypes.object
};