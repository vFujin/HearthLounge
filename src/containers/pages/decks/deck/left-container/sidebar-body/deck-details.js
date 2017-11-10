import React from 'react';
import PropTypes from 'prop-types';
import Decklist from "./decklist/decklist";
import ManaCurve from "../../../../../../components/mana-curve/mana-curve";
import CopyDeck from "./copy-deck";

const DeckDetails = ({allCards, activeDeckCopy, deckEditView, deckstring, playerClass, handleCardRemovalClick}) => {
  const {cards, max} = activeDeckCopy;
  return (
      <div className="container__mana-curve">
        <h3>Mana Curve</h3>
        <ManaCurve deck={cards} max={max} barHeight="70%" padding="1vh 0"/>

        <h3>Cards <CopyDeck deckstring={deckstring} playerClass={playerClass}/></h3>
        <Decklist cards={cards || []}
                  allCards={allCards}
                  deckEditView={deckEditView}
                  handleCardRemovalClick={handleCardRemovalClick}/>
      </div>
  )
};


export default DeckDetails;

Decklist.propTypes = {
  deckEditView: PropTypes.bool.isRequired,
  handleCardRemovalClick: PropTypes.func.isRequired,
  deckstring: PropTypes.string,
  playerClass: PropTypes.string,
  editingDecklist: PropTypes.shape({
    cards: PropTypes.array,
    max: PropTypes.number
  })
};