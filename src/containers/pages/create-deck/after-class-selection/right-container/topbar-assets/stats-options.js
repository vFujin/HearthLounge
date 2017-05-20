import React from 'react';
import PropTypes from 'prop-types';
import MapFunctionlessIcons from './map-functionless-icons';
import MapFunctionfulIcons from './map-functionful-icons';

const StatsOptions = ({deck, activeClass, handleOptionsClick, handleImgSaveClick, filtersActive, imgReadyDecklist}) => {

  return (
      <div className={`topbar__container topbar__grid topbar__grid--1-2-1 topbar__deckDetails`}>
        <MapFunctionlessIcons deck={deck} activeClass={activeClass} filtersActive={filtersActive} set="types" />
        <div className="deck-length"><p>{deck.length} / 30</p></div>
        <MapFunctionfulIcons set="options"
                             handleOptionsClick={handleOptionsClick}
                             handleImgSaveClick={handleImgSaveClick}
                             imgReadyDecklist={imgReadyDecklist}/>
      </div>
  )
};

StatsOptions.propTypes = {
  deck: PropTypes.array,
  activeClass: PropTypes.string.isRequired,
  handleOptionsClick: PropTypes.func.isRequired
};

export default StatsOptions;