import React from 'react';
import MapFunctionlessIcons from './map-functionless-icons';
import MapFunctionfulIcons from './map-functionful-icons';

const StatsOptions = ({deck, filtersNotActive, params, handleDeckSaving}) => {

  return (
      <div className={`topbar__container ${filtersNotActive}`}>
        <MapFunctionlessIcons deck={deck} params={params} set="types" filtersActive={filtersNotActive}/>
        <div className="deck-length"><p>{deck.length} / 30</p></div>
        <MapFunctionfulIcons deck={deck} set="options" filtersActive={filtersNotActive}/>
      </div>
  )
};

export default StatsOptions;