import React from 'react';
import PropTypes from 'prop-types';
import {uniqueCards} from "../../../../../../../utils/deck/calculate";

const CardTooltip = ({card, deck}) => {
  const cardRarity = card.rarity;
  let maxAmount = cardRarity !== "Legendary" ? 2 : 1;

  return (
    <div className="tooltip-count">
      <span>
        {uniqueCards(deck, card)}/{maxAmount}
      </span>
    </div>
  )
};

export default CardTooltip;

CardTooltip.propTypes = {
  card: PropTypes.object,
  deck: PropTypes.array
};