import React from 'react';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';

const MapIcons = ({deck, params, set, types}) => {
  const topbar_icons = {
    cards: [
      {
        title: params,
        icon: params
      },
      {
        title: 'classic',
        icon: 'hs-logo'
      },
      {
        title: 'basic',
        icon: 'basic'
      },
      {
        title: "journey to un'goro",
        icon: 'journey-to-ungoro'
      }
    ],
    options: [
      {
        title: 'copy deck URL',
        icon: 'link'
      },
      {
        title: 'copy deck to clipboard',
        icon: 'copy'
      },
      {
        title: 'save deck',
        icon: 'download'
      },
    ],
    types: [
      {
        title: 'minion',
        icon: 'minions'
      },
      {
        title: 'spell',
        icon: 'fire'
      },
      {
        title: 'weapon',
        icon: 'warrior'
      }
    ]
  };

  const countTypes = _.countBy(deck, 'type');

  const deckCardTypes = (type) =>{
    return countTypes[type] || 0;
  };

  const checkSuffix = (title) =>{
    let upperTitle = _.upperFirst(title);
    return countTypes[upperTitle] > 1 ? `${upperTitle}s` : upperTitle;
  };

  const generateSet = () =>{
    return types === false
      ? topbar_icons[set].map(obj =>
            <Tooltip key={obj.title} title={checkSuffix(obj.title)} placement="bottom">
              <span className={`hs-icon icon-${obj.icon}`}></span>
            </Tooltip>)
      : topbar_icons[set].map(obj =>
        <Tooltip key={obj.title} title={checkSuffix(obj.title)} placement="bottom">
          <span className={`hs-icon icon-${obj.icon}`}></span>
          {deckCardTypes(_.upperFirst(obj.title))}
        </Tooltip>)
  };


  return(
      <div className={set}>
        {generateSet()}
      </div>
  )
};

React.propTypes = {
  deck: React.PropTypes.array,
  params: React.PropTypes.string,
  set: React.PropTypes.string,
  types: React.PropTypes.bool
};

export default MapIcons;