import React from 'react';
import { connect } from "react-redux";
import DecklistSidebar from "../../../../../../components/decklist-sidebar/decklist";
import ManaCurve from "../../../../../../components/mana-curve/mana-curve";
import CopyDeck from "./copy-deck";

const DeckDetails = ({activeDeck, activeDeckCopy}) => {
  const {cards, max, manaCurve} = activeDeckCopy;
  const {deckstring, playerClass} = activeDeck;

  return (
      <div className="container__mana-curve">
        <h3>Mana Curve</h3>
        <ManaCurve deck={cards} max={max} barHeight="70%" padding="1vh 0" manaCurveObj={manaCurve} barColor={playerClass}/>

        <h3>Cards <CopyDeck deckstring={deckstring} playerClass={playerClass}/></h3>
        <DecklistSidebar showCardAdditionBox
                         inDeckCreation={false}
                         deck={activeDeckCopy.cards}
                         deckLength={activeDeckCopy.length} />
      </div>
  )
};

const mapStateToProps = state => {
  const { activeDeck, activeDeckCopy } = state.deckView;
  return { activeDeck, activeDeckCopy};
};

export default connect(mapStateToProps)(DeckDetails);