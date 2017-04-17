import React from 'react';
import _ from 'lodash';
import {topbar_icons} from '../topbar-assets/icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionfulIcons = ({deck, set, filtersActive}) => {
  const countTypes = _.countBy(deck, 'type');

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
            {deckCardTypes(_.upperFirst(obj.title))}
          </Tooltip>
        </li>)
  };

  return(
      <ul className={filtersActive}>
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