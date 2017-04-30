import React from 'react';
import PropTypes from 'prop-types';
import StatsOptions from './topbar-assets/stats-options';
import Filters from './topbar-assets/filters';

const Topbar = ({deck, filtersView, activeClass, query, handleImgSaveClick, handleOptionsClick}) => {

  const activeView = () =>{
    return filtersView
        ? <Filters deck={deck} activeClass={activeClass} query={query} filtersActive={filtersView}/>
        : <StatsOptions deck={deck} activeClass={activeClass} handleImgSaveClick={handleImgSaveClick} handleOptionsClick={handleOptionsClick} filtersActive={filtersView}/>
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

