import React from 'react';
import PropTypes from 'prop-types';
import DeckDetails from "./deck-details";
import Background from "./background";
import Loader from "../../../../../../components/loader";

const SidebarBody = ({currentDeck, editingDecklist, deckEditing, search, handleCardRemovalClick}) =>{
  const {hsClass} = currentDeck;
  if(editingDecklist) {
    return (
        <div className="sidebar__body">
          <DeckDetails editingDecklist={editingDecklist}
                       deckEditing={deckEditing}
                       handleCardRemovalClick={handleCardRemovalClick}/>
          {deckEditing
              ? <div className="addCard-wrapper">
                {search()}
                <span>+</span>
              </div>
              : null
          }
          <Background hsClass={hsClass}/>
        </div>
    )
  } else {
    return <Loader />
  }
};

export default SidebarBody;

SidebarBody.propTypes = {
  currentDeck: PropTypes.shape({
    hsClass: PropTypes.string
  }).isRequired,
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  editingDecklist: PropTypes.shape({
    cards: PropTypes.object,
    max: PropTypes.number
  })
};