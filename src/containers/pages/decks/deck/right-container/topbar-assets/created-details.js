import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Tooltip from 'antd/lib/tooltip';
import {timeDifference} from '../../../../../../utils/unix-to-date';

const CreatedDetails = ({patch, activeDeck}) =>{

  const {created, updated} = activeDeck;
  const tooltip = updated && <Tooltip title={`Updated ${timeDifference(updated)}`} placement="bottomLeft" arrowPointAtCenter>*</Tooltip>;

  const patchRedirect = (patch) =>{
    return (
      <a className="tooltip-redirect"
         href={`https://hearthstone.gamepedia.com/Patch_${patch}`}
         rel="noopener noreferrer"
         target="_blank">
        {patch}
      </a>
    )
  };

  const patchTooltip = () =>{
    return (
      <div>
        <p>Created on patch: {patchRedirect(activeDeck.patch)}</p>
        <p>Live patch: {patchRedirect(patch)}</p>
      </div>
    )
  };

  return (
      <div className="created-details">
        <Tooltip title={patchTooltip()} placement="bottomRight" arrowPointAtCenter>
          <p>{activeDeck.patch}</p>
        </Tooltip>
        <p>{timeDifference(created)} {tooltip}</p>
      </div>
  )
};

const mapStateToProps = state =>{
  const {patch} = state.info;
  return {patch}
};

export default connect(mapStateToProps, null)(CreatedDetails);

CreatedDetails.propTypes = {
  activeDeck: PropTypes.object
};