import React from 'react';
import PropTypes from 'prop-types';

const DeckOptionsMobileTopbar = ({handleTabClick, activeDeckDetailsTab}) => {
  return (
      <div className="deckDetails__topbar">
        <div onClick={handleTabClick}
             className={activeDeckDetailsTab === "aboutDeck" ? "active" : undefined}
             id="aboutDeck">Deck Details</div>
        <div onClick={handleTabClick}
             className={activeDeckDetailsTab === "preview" ? "active" : undefined}
             id="preview">Preview</div>
      </div>
  )
};

DeckOptionsMobileTopbar.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
  activeDeckDetailsTab: PropTypes.string.isRequired
};

DeckOptionsMobileTopbar.defaultProps = {
  activeDeckDetailsTab: "aboutDeck"
};

export default DeckOptionsMobileTopbar;