import React from 'react';
import PropTypes from 'prop-types';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionfulIcons = ({set, handleDeckSaving}) => {

  const functions = (icon) => {
    switch(icon){
      case 'link': return;
      case 'copy': return;
      case 'download': return handleDeckSaving;
    }
  };

  const generateSet = () => {
    return topbar_icons(null)[set].map(obj =>
        <li key={obj.icon} onClick={functions(obj.icon)}>
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