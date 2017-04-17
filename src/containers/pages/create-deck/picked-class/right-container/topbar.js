import React from 'react';
import MapFunctionlessIcons from './topbar-assets/map-static-icons';
import IconFilter from '../../../../shared-assets/filters/icon-filter';

const Topbar = ({deck, filtersView, params, query, handleDeckSaving}) => {
  let filtersActive = !filtersView ? 'topbar__deckDetails' : 'display-none';
  let filtersNotActive = filtersView ? 'topbar__filters' : 'display-none';
  return (
      <div className="topbar">
        <div className={filtersNotActive}>
          <IconFilter header={false} filter="cost" query={query} tooltip={false} wrapper_class="topbar-left" />
          <div className="topbar-right">
            <MapFunctionlessIcons deck={deck} params={params} set="cards" filtersActive={filtersNotActive}/>
          </div>
        </div>
        <div className={filtersActive}>
          <MapFunctionlessIcons deck={deck} params={params} set="types" filtersActive={filtersNotActive}/>
          <div className="deck-length"><p>{deck.length} / 30</p></div>
          {/*<MapIcons deck={deck} params={params} set="options" types={false} handleDeckSaving={handleDeckSaving}/>*/}
        </div>
      </div>
  );
};

Topbar.propTypes = {
  deck: React.PropTypes.array.isRequired,
  filtersView: React.PropTypes.bool,
  params: React.PropTypes.object,
  query: React.PropTypes.object
};

export default Topbar;

