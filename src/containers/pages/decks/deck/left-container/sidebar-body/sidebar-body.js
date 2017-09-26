import React from 'react';
import PropTypes from 'prop-types';
import DeckDetails from "./deck-details";
import Background from "./background";

const SidebarBody = ({allCards, activeDeck, editingDecklist, deckEditing, search, handleCardRemovalClick}) =>{
  const {playerClass, deckstring} = activeDeck;
  if(editingDecklist) {
    return (
        <div className="sidebar__body">
          <DeckDetails editingDecklist={editingDecklist}
                       deckEditing={deckEditing}
                       deckstring={deckstring}
                       playerClass={playerClass}
                       allCards={allCards}
                       handleCardRemovalClick={handleCardRemovalClick}/>
          {deckEditing
              ? <div className="addCard-wrapper">
                {search()}
                <span>+</span>
              </div>
              : null
          }
          <Background playerClass={playerClass}/>
        </div>
    )
  }
};

export default SidebarBody;

SidebarBody.propTypes = {
  activeDeck: PropTypes.shape({
    playerClass: PropTypes.string,
    deckstring: PropTypes.string
  }).isRequired,
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  editingDecklist: PropTypes.shape({
    cards: PropTypes.object,
    max: PropTypes.number
  })
};