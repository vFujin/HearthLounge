import React from 'react';
import {connect} from 'react-redux';
import Tooltip from 'antd/lib/tooltip';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import './styles.css';

const CreatedDetails = ({patch, activeDeck}) => {
  const {created, updated} = activeDeck;
  const tooltip = updated && <Tooltip title={`Updated ${distanceInWordsToNow(updated, {addSuffix: true})}`} placement="bottomLeft" arrowPointAtCenter>*</Tooltip>;

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
      <div className={`created-details ${activeDeck.loading ? "loading" : undefined}`}>
        <Tooltip title={patchTooltip()} placement="bottomRight" arrowPointAtCenter>
          <p>{activeDeck.patch}</p>
        </Tooltip>
        {!activeDeck.loading && (
          <p>{distanceInWordsToNow(created, {addSuffix: true})} {tooltip}</p>)
        }
      </div>
  )
};

const mapStateToProps = state =>{
  const {patch} = state.info;
  const {activeDeck} = state.deckView;
  return {patch, activeDeck}
};

export default connect(mapStateToProps)(CreatedDetails);