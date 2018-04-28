import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import Icon from "../../../../../../../components/icon";
import PropTypes from "prop-types";

const GameDetails = ({deckAuthor}) =>{
  const {username, region, battletag, favouriteClass} = deckAuthor;

  return (
    <Tooltip title={`${username}'s in-game info`} placement="bottom">
      <div className="game-details-wrapper">
        {region && <p>{region}</p>}
        {battletag && <Icon name="battlenet"
                            className="battlenet active"
                            tooltip={true}
                            tooltipPlacement="right"
                            title={`${username}'s battletag - ${battletag}`} />
        }
        {favouriteClass && (
          <p>
            <Icon name={favouriteClass}
                  tooltip={true}
                  title={`${username}'s favourite class - ${favouriteClass}`}
                  tooltipPlacement="right"/>
          </p>
        )}
      </div>
    </Tooltip>
  )
};

export default GameDetails;

GameDetails.propTypes = {
  deckAuthor: PropTypes.shape({
    username: PropTypes.string
  })
};