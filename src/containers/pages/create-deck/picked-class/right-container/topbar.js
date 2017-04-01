import React from 'react';
import _ from 'lodash';
import Tooltip from 'antd/lib/tooltip';
import {IconFilter} from '../../../../shared-assets/filters/icon-filter';
const Topbar = ({deck, filtersView, params, query}) => {
    let filtersViewActive = filtersView === false ? 'topbar__deckDetails' : 'display-none';
    let filtersViewNotActive = filtersView === false ? 'display-none' : 'topbar__filters';

    const deckCardTypes = (type) =>{
      let types = _.countBy(deck, 'type');
      return types[type] || 0;
    };
    return (
        <div className="topbar">
          <div className={filtersViewNotActive}>
            <IconFilter header={false} filter="cost" query={query} tooltip={false} wrapper_class="topbar-left" />
            <div className="topbar-right">
              <Tooltip title={_.upperFirst(params)} placement="bottom">
                <span className={`hs-icon icon-${params}`}></span>
              </Tooltip>
              <Tooltip title="Classic" placement="bottom">
                <span className="hs-icon icon-hs-logo"></span>
              </Tooltip>
              <Tooltip title="Basic" placement="bottom">
                <span className="hs-icon icon-basic"></span>
              </Tooltip>
              <span className="hs-icon icon-journey-to-ungoro"></span>
              <span className={`hs-icon icon-journey-to-ungoro`}></span>
            </div>
          </div>
          <div className={filtersViewActive}>
            <div className="deck-cardTypes">
              <Tooltip title="Minions" placement="bottom">
                <span className="hs-icon icon-minions"></span>
                {deckCardTypes('Minion')}
              </Tooltip>
              <Tooltip title="Spell" placement="bottom">
                <span className="hs-icon icon-fire"></span>
                {deckCardTypes('Spell')}
              </Tooltip>
              <Tooltip title="Weapon" placement="bottom">
                <span className="hs-icon icon-warrior"></span>
                {deckCardTypes('Weapon')}
              </Tooltip>
            </div>
            <div className="deck-length">
              <p>{deck.length} / 30</p>
            </div>
            <div className="options">
              <Tooltip title="Copy deck URL" placement="bottom">
                <span className="hs-icon icon-link"></span>
              </Tooltip>
              <Tooltip title="Copy deck to clipboard" placement="bottom">
                <span className="hs-icon icon-copy"></span>
              </Tooltip>
              <Tooltip title="Save deck" placement="bottom">
                <span className="hs-icon icon-download"></span>
              </Tooltip>
            </div>
          </div>
        </div>
    );
};

export default Topbar;