import React from 'react';
import StatsOptions from './topbar-assets/stats-options';
import Filters from './topbar-assets/filters';

const Topbar = ({deck, filtersView, params, query, handleDeckSaving}) => {
  let filtersActive = !filtersView ? 'topbar__deckDetails' : 'display-none';
  let filtersNotActive = filtersView ? 'topbar__filters' : 'display-none';
  return (
      <div className="topbar">
        <Filters deck={deck} filtersNotActive={filtersNotActive} params={params} query={query} />
        <StatsOptions deck={deck} filtersNotActive={filtersActive} params={params} handleDeckSaving={handleDeckSaving}/>
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

