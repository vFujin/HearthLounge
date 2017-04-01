import React from 'react';
import _ from 'lodash';
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
            <div>
              <span className="hs-icon icon-classic"></span>
              <span className="hs-icon icon-basic"></span>
              <span className={`hs-icon icon-${params}`}></span>
            </div>
          </div>
          <div className={filtersViewActive}>
            <div className="deck-cardTypes">
              <p>Minion: {deckCardTypes('Minion')}</p>
              <p>Spell: {deckCardTypes('Spell')}</p>
              <p>Weapon: {deckCardTypes('Weapon')}</p>
            </div>
            <div className="deck-length">
              <p>{deck.length} / 30</p>
            </div>
            <div className="options">
              <p>Copy deck to clipboard</p>
              <p>Save deck</p>
            </div>
          </div>
        </div>
    );
};

export default Topbar;