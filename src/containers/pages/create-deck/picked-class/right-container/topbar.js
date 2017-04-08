import React from 'react';
import MapIcons from './map-icons';
import IconFilter from '../../../../shared-assets/filters/icon-filter';

const Topbar = ({deck, filtersView, params, query}) => {

  let filtersViewActive = filtersView === false ? 'topbar__deckDetails' : 'display-none';
  let filtersViewNotActive = filtersView === false ? 'display-none' : 'topbar__filters';

  return (
      <div className="topbar">
        <div className={filtersViewNotActive}>
          <IconFilter header={false} filter="cost" query={query} tooltip={false} wrapper_class="topbar-left" />
          <div className="topbar-right">
            <MapIcons deck={deck} params={params} set="cards" types={false}/>
          </div>
        </div>
        <div className={filtersViewActive}>
          <MapIcons deck={deck} params={params} set="types" types={true}/>
          <div className="deck-length"><p>{deck.length} / 30</p></div>
          <MapIcons deck={deck} params={params} set="options" types={false}/>
        </div>
      </div>
  );
};

export default Topbar;