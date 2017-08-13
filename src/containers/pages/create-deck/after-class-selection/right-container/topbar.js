import React from 'react';
import PropTypes from 'prop-types';
import StatsOptions from './topbar-assets/stats-options';
import Filters from './topbar-assets/filters';

const Topbar = ({deck, deckstring, importedDeckstring, importedDeckstringPopover, filtersView, playerClass, query, handleImgSaveClick, handleOptionsClick, handleInputChange, handleDeckImport, imgReadyDecklist}) => {

  const activeView = () =>{
    return filtersView
        ? <Filters deck={deck} playerClass={playerClass} query={query} filtersActive={filtersView}/>
        : <StatsOptions deck={deck}
                        deckstring={deckstring}
                        playerClass={playerClass}
                        importedDeckstring={importedDeckstring}
                        importedDeckstringPopover={importedDeckstringPopover}
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
  playerClass: PropTypes.string,
  query: PropTypes.object
};

export default Topbar;

