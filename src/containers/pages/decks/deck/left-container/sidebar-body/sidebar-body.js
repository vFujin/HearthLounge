import React from 'react';
import PropTypes from 'prop-types';
import DeckDetails from "./deck-details";
import Background from "./background";

const SidebarBody = ({allCards, activeDeck, activeDeckCopy, deckEditView, search, handleCardRemovalClick}) =>{
  const {playerClass, deckstring} = activeDeck;
    return (
        <div className="sidebar__body">
          <DeckDetails activeDeckCopy={activeDeckCopy}
                       deckEditView={deckEditView}
                       deckstring={deckstring}
                       playerClass={playerClass}
                       allCards={allCards}
                       handleCardRemovalClick={handleCardRemovalClick}/>
          {deckEditView
              ? <div className="addCard-wrapper">
                {search()}
                <span>+</span>
              </div>
              : null
          }
          <Background playerClass={playerClass}/>
        </div>
    )
};

export default SidebarBody;

SidebarBody.propTypes = {
  activeDeck: PropTypes.shape({
    playerClass: PropTypes.string,
    deckstring: PropTypes.string
  }).isRequired,
  deckEditView: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  editingDecklist: PropTypes.shape({
    cards: PropTypes.object,
    max: PropTypes.number
  })
};