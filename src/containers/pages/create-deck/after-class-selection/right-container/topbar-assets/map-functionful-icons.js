import React from 'react';
import _ from 'lodash';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionfulIcons = ({set, filtersActive, handleDeckSaving}) => {


  const generateSet = () => {
    return topbar_icons[set].map(obj =>
        <li key={obj.icon} onClick={handleDeckSaving}>
          <Tooltip key={obj.title} title={obj.title} placement="bottom">
            <span className={`hs-icon icon-${obj.icon}`}></span>
          </Tooltip>
        </li>)
  };

  return(
      <ul className={filtersActive ? 'topbar__deckDetails--options' : ''}>
        {generateSet()}
      </ul>
  )
};

React.propTypes = {
  deck: React.PropTypes.array,
  params: React.PropTypes.string, //choosen class
  set: React.PropTypes.string,
  filtersActive: React.PropTypes.string
};

export default MapFunctionfulIcons;