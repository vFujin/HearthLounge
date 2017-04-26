import React from 'react';
import PropTypes from 'prop-types';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionfulIcons = ({set, handleDeckSaving}) => {
  const generateSet = () => {
    return topbar_icons(null)[set].map(obj =>
        <li key={obj.icon} onClick={handleDeckSaving}>
          <Tooltip key={obj.title} title={obj.title} placement="bottom">
            <span className={`hs-icon icon-${obj.icon}`}></span>
          </Tooltip>
        </li>)
  };

  return(
      <ul className="topbar__deckDetails--options">
        {generateSet()}
      </ul>
  )
};

React.propTypes = {
  set: PropTypes.string.isRequired,
  handleDeckSaving: PropTypes.func.isRequired
};

export default MapFunctionfulIcons;