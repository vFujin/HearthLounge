import React from 'react';
import PropTypes from 'prop-types';

const Card = ({card, deck, handleCardClick, toggleCardAmountTooltip}) => {
  const toggleImg = (card) =>{
    let amount = deck.filter(c => c.cardId === card.cardId).length;
    if(amount > 0) return 'choosen';
  };

  return (
      <li className={toggleImg(card)} onContextMenu={deck ? (e) => handleCardClick(e, card) : null}
          onClick={deck ? (e) => handleCardClick(e, card) : null}>
        {toggleCardAmountTooltip(card)}
        <div className="img-wrapper">
          <img className={`${toggleImg(card)} ${deck.length >= 30 ? "disabled" : ''} `}
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
  handleCardClick: PropTypes.func.isRequired,
  toggleCardAmountTooltip: PropTypes.func.isRequired,
};