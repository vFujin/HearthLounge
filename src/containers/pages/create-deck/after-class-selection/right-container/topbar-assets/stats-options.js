import React from 'react';
import PropTypes from 'prop-types';
import MapFunctionlessIcons from './map-functionless-icons';
import MapFunctionfulIcons from './map-functionful-icons';

const StatsOptions = ({deck, deckstring, importedDeckstring, playerClass, handleOptionsClick, handleImgSaveClick, handleInputChange, handleDeckImport, filtersActive, imgReadyDecklist, importedDeckstringPopover}) => {

  return (
      <div className={`topbar__container topbar__grid topbar__grid--1-2-1 topbar__deckDetails`}>
        <MapFunctionlessIcons deck={deck} playerClass={playerClass} filtersActive={filtersActive} set="types" />
        <div className="deck-length"><p>{deck.length} / 30</p></div>
        <MapFunctionfulIcons set="options"
                             handleInputChange={handleInputChange}
                             handleDeckImport={handleDeckImport}
                             importedDeckstring={importedDeckstring}
                             importedDeckstringPopover={importedDeckstringPopover}
                             deckstring={deckstring}
                             handleOptionsClick={handleOptionsClick}
                             handleImgSaveClick={handleImgSaveClick}
                             imgReadyDecklist={imgReadyDecklist}/>
      </div>
  )
};

StatsOptions.propTypes = {
  deck: PropTypes.array,
  playerClass: PropTypes.string.isRequired,
  handleOptionsClick: PropTypes.func.isRequired
};

export default StatsOptions;