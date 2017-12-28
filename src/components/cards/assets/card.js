import React from 'react';
import CardTooltip from "./card-tooltip";

const Card = ({card, deck, handleCardClick}) => {
  if(deck){
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
        <div className="img-wrapper"></div>
        <img className={`${toggleImg()} ${isDisabled}`}
             src={card.img}
             alt={card.name}/>
      </li>
    );
  }

  const {img, name} = card;
  return (
    <li>
      <div className="img-wrapper"></div>
      <img style={card.type === "Hero" ? {"top": "-12px"} : undefined} src={img} alt={name}/>
    </li>
  )
};

export default Card;