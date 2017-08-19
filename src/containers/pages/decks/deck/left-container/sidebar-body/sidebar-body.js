import React from 'react';
import PropTypes from 'prop-types';
import DeckDetails from "./deck-details";
import Background from "./background";
import Loader from "../../../../../../components/loader";

const SidebarBody = ({allCards, currentDeck, editingDecklist, deckEditing, search, handleCardRemovalClick}) =>{
  const {playerClass, deckstring} = currentDeck;
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
  } else {
    return <Loader />
  }
};

export default SidebarBody;

SidebarBody.propTypes = {
  currentDeck: PropTypes.shape({
    playerClass: PropTypes.string
  }).isRequired,
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  editingDecklist: PropTypes.shape({
    cards: PropTypes.object,
    max: PropTypes.number
  })
};