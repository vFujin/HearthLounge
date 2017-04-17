import React from 'react';
import _ from 'lodash';
import {topbar_icons} from '../topbar-assets/icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionlessIcons = ({deck, params, set, filtersActive}) => {
  const countTypes = _.countBy(deck, 'type');
  const filtersAreActive = filtersActive ? 'display-none' : '';

  const deckCardTypes = (type) =>{
    return countTypes[type] || 0;
  };

  const checkSuffix = (title) =>{
    let upperTitle = _.upperFirst(title);
    return countTypes[upperTitle] > 1 ? `${upperTitle}s` : upperTitle;
  };

  const generateSet = () => {
    return topbar_icons[set].map(obj =>
      <li key={obj.icon}>
        <Tooltip key={obj.title} title={checkSuffix(obj.title)} placement="bottom">
          <span className={`hs-icon icon-${obj.icon}`}></span>
          <p className={filtersAreActive}>{deckCardTypes(_.upperFirst(obj.title))}</p>
        </Tooltip>
      </li>);
  };


  return(
      <ul>
        <li className={!filtersAreActive}>
          <Tooltip key={params} title={checkSuffix(params)} placement="bottom">
            <span className={`hs-icon icon-${params}`}></span>

          </Tooltip>
        </li>
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

export default MapFunctionlessIcons;