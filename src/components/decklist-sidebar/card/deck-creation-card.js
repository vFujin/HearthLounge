import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import {cardRarityBackground} from "../../../utils/deck/card-rarity-background";
import {uniqueCards} from "../../../utils/deck/calculate";
import CardCost from "./cost";
import CardName from "./name";
import CardRemove from "./remove";

const DeckCreationCard = ({deck, card, inDeckCreation}) => {
  const countCards = (e) => uniqueCards(deck, e);

  const removeApostrophe = (string) =>{
    return _.replace(string.toLowerCase(), "'", "");
  };

  return (
    <li key={card.cardId} className={cardRarityBackground(card.rarity)}>
      <CardName set={removeApostrophe(_.kebabCase(card.cardSet))} name={card.name} amount={countCards(card)}/>
      <CardCost cost={card.cost}/>
      {inDeckCreation && <CardRemove card={card} inDeckCreation/>}
    </li>
  )
};

DeckCreationCard.propTypes = {
  deck: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  inDeckCreation: PropTypes.bool.isRequired
};

DeckCreationCard.defaultProps = {
  deck: {},
  card: {},
  inDeckCreation: true
};

export default DeckCreationCard;