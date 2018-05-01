import React from 'react';
import { connect } from "react-redux";
import Icon from "../../icon";
import {decklistRemoveCard} from "../../../utils/deck/edit-mode/decklist-remove-card";
import {updateActiveDeckCopy} from "../../../redux/deck/active-deck-copy/actions";
import {editDeck} from "../../../redux/create-deck/actions/create-deck.action";
import {updateDeck} from "../../../containers/pages/create-deck/after-class-selection/right-container/content-assets/utils";

const CardRemove = ({card, cards, activeDeckCopy, deck, inDeckCreation = false, editDeck, updateActiveDeckCopy}) => {

  const handleDeckUpdate = (e) => {
    if(inDeckCreation){
      return updateDeck(e, card, deck, editDeck, true)
    } else {
      return decklistRemoveCard(e, cards.cards, activeDeckCopy, updatedDeck => updateActiveDeckCopy(updatedDeck));
    }
  };

  return (
    <div className="decklistSidebar__card--action">
      <div id={card.cardId}
           data-cost={card.cost}
           data-amount={card.amount}
           onClick={(e) => handleDeckUpdate(e)}>
        <Icon name="cross" tooltip={false}/>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  const { cards, deckView, deckCreation } = state;
  const { activeDeckCopy } = deckView;
  const {deck} = deckCreation;
  return { cards, activeDeckCopy, deck };
};

const mapDispatchToProps = dispatch => {
  return {
    editDeck: payload => dispatch(editDeck(payload)),
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardRemove);