import React from 'react';
import PropTypes from 'prop-types';
import CardTooltip from "../../../../../../../components/cards/assets/card-tooltip";

const Card = ({card, deck, handleCardClick}) =>{
  const deckLength = deck.length;
  let cardAmount = deck.filter(c => c.cardId === card.cardId).length;
  let isDisabled = deckLength >= 30 ? "disabled" : '';

  const toggleImg = () =>{
    if(cardAmount > 0) return 'choosen';
  };

  const toggleCardAmountTooltip = () => {
    if(cardAmount > 0) return <CardTooltip card={card} deck={deck} />;
  };

  return (
      <li className={toggleImg()} onContextMenu={deck ? (e) => handleCardClick(e, card) : null}
          onClick={deck ? (e) => handleCardClick(e, card) : null}>
        {toggleCardAmountTooltip()}
        <div className="img-wrapper">
          <img className={`${toggleImg()} ${isDisabled}`}
               src={card.img}
               alt={card.name}/>
        </div>
      </li>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deck: PropTypes.array.isRequired,
  handleCardClick: PropTypes.func.isRequired
};