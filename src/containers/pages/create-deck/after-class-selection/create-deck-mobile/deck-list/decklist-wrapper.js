import React from 'react';
import PropTypes from 'prop-types';
import DeckSidebar from '../../left-container/deck-sidebar';

const DecklistWrapper = ({deck, playerClass}) => {
  return (
      <div className="decklist__wrapper">
        <DeckSidebar playerClass={playerClass}/>
      </div>
  )
};

DecklistWrapper.propTypes = {
  playerClass: PropTypes.string.isRequired,
  deck: PropTypes.arrayOf(PropTypes.object)
};

DecklistWrapper.defaultProps = {
  deck: []
};

export default DecklistWrapper;