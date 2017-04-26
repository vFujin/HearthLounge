import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {topbar_icons} from './icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionlessIcons = ({deck, activeClass, filtersActive, set}) => {
  const countTypes = _.countBy(deck, 'type');

  const deckCardTypes = (type) =>{
    return countTypes[type] || 0;
  };

  const checkSuffix = (title) =>{
    let upperTitle = _.upperFirst(title);
    return countTypes[upperTitle] > 1 ? `${upperTitle}s` : upperTitle;
  };

  const generateSet = () => {
      return topbar_icons(activeClass)[set].map(obj =>
          <li key={obj.icon}>
            <Tooltip key={obj.title} title={checkSuffix(obj.title)} placement="bottom">
              <span className={`hs-icon icon-${obj.icon}`}></span>
              <p className={filtersActive ? 'display-none' : ''}>{deckCardTypes(_.upperFirst(obj.title))}</p>
            </Tooltip>
          </li>);
  };

  return(
      <ul>
        {generateSet()}
      </ul>
  )
};

MapFunctionlessIcons.propTypes = {
  deck: PropTypes.array,
  activeClass: PropTypes.string.isRequired,
  set: PropTypes.string.isRequired
};

export default MapFunctionlessIcons;