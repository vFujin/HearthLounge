import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../../../components/loader";
import {filterByPlayerClass} from "../../../../../../../utils/filter/cards/by-player-class";
import Card from "./card";

const Cards = ({allCards, deck, playerClass, handleCardClick, toggleCardAmountTooltip}) =>{
  const cardsLength = allCards.length;

  const cards = () =>{
    return filterByPlayerClass(allCards, playerClass, 60)
        .map(card => <Card card={card}
                           deck={deck}
                           key={card.cardId}
                           handleCardClick={handleCardClick}
                           toggleCardAmountTooltip={toggleCardAmountTooltip}/>
        )
  };

  return(
        <ul className="container__cards">
          {
            cardsLength < 1
              ? <Loader />
              : cards()
          }
        </ul>
  )
};



Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;