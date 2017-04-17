import React from 'react';
import _ from 'lodash';
import {topbar_icons} from '../topbar-assets/icons';
import Tooltip from 'antd/lib/tooltip';

const MapFunctionlessIcons = ({deck, params, set, filtersActive}) => {
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
      <li>
        <Tooltip key={obj.title} title={checkSuffix(obj.title)} placement="bottom">
          <span className={`hs-icon icon-${obj.icon}`}></span>
        </Tooltip>
      </li>);
        // : topbar_icons[set].map(obj =>
        //
        //     <Tooltip key={obj.title} title={checkSuffix(obj.title)} placement="bottom">
        //
        //       <span className={`hs-icon icon-${obj.icon}`}></span>
        //       {deckCardTypes(_.upperFirst(obj.title))}
        //     </Tooltip>)
  };


  return(
      <ul>
        <li className={filtersActive}>
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
  types: React.PropTypes.bool
};

export default MapFunctionlessIcons;