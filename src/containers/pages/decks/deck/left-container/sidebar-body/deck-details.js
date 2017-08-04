import React from 'react';
import PropTypes from 'prop-types';
import Decklist from "./decklist/decklist";
import ManaCurve from "../../../../../../components/mana-curve/mana-curve";

const DeckDetails = ({editingDecklist, deckEditing, handleCardRemovalClick}) => {
  const {cards, max} = editingDecklist;

  return (
      <div className="container__mana-curve">
        <h3>Mana Curve</h3>
        <ManaCurve deck={cards} max={max} />

        <h3>Cards</h3>
        <Decklist cards={cards}
                  deckEditing={deckEditing}
                  handleCardRemovalClick={handleCardRemovalClick}/>
      </div>
  )
};


export default DeckDetails;

Decklist.propTypes = {
  deckEditing: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  editingDecklist: PropTypes.shape({
    cards: PropTypes.array,
    max: PropTypes.number
  })
};