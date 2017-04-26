import React from 'react';
import PropTypes from 'prop-types';
import StatsOptions from './topbar-assets/stats-options';
import Filters from './topbar-assets/filters';

const Topbar = ({deck, filtersView, activeClass, query, handleDeckSaving}) => {

  const activeView = () =>{
    return filtersView
        ? <Filters deck={deck} activeClass={activeClass} query={query} filtersActive={filtersView}/>
        : <StatsOptions deck={deck} activeClass={activeClass} handleDeckSaving={handleDeckSaving} filtersActive={filtersView}/>
  };

  return (
      <div className="topbar">
        {activeView()}
      </div>
  );
};

Topbar.propTypes = {
  deck: PropTypes.array.isRequired,
  filtersView: PropTypes.bool,
  params: PropTypes.object,
  query: PropTypes.object
};

export default Topbar;

