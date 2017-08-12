import React from 'react';
import PropTypes from 'prop-types';
import StatsOptions from './topbar-assets/stats-options';
import Filters from './topbar-assets/filters';

const Topbar = ({deck, deckstring, importedDeckstring, filtersView, activeClass, query, handleImgSaveClick, handleOptionsClick, handleInputChange, handleDeckImport, imgReadyDecklist}) => {

  const activeView = () =>{
    return filtersView
        ? <Filters deck={deck} activeClass={activeClass} query={query} filtersActive={filtersView}/>
        : <StatsOptions deck={deck}
                        deckstring={deckstring}
                        activeClass={activeClass}
                        importedDeckstring={importedDeckstring}
                        handleImgSaveClick={handleImgSaveClick}
                        handleOptionsClick={handleOptionsClick}
                        handleInputChange={handleInputChange}
                        handleDeckImport={handleDeckImport}
                        filtersActive={filtersView}
                        imgReadyDecklist={imgReadyDecklist}/>
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

