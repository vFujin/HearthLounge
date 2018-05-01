import React from 'react';
import { connect } from "react-redux";
import Icon from "../../icon";
import {decklistRemoveCard} from "../../../utils/deck/edit-mode/decklist-remove-card";
import {updateActiveDeckCopy} from "../../../redux/deck/active-deck-copy/actions";

const CardRemove = ({card, cards, activeDeckCopy, updateActiveDeckCopy}) => {
  return (
    <div className="decklistSidebar__card--action">
      <div id={card.cardId}
           data-cost={card.cost}
           data-amount={card.amount}
           onClick={(e) => decklistRemoveCard(e, cards.cards, activeDeckCopy, (updatedDeck) => updateActiveDeckCopy(updatedDeck))}>
        <Icon name="cross" tooltip={false}/>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  const { cards, deckView } = state;
  const { activeDeckCopy } = deckView;
  return { cards, activeDeckCopy };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRemove);