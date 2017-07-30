import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../../../../../../components/loader";
import {filterByPlayerClass} from "../../../../../../../utils/filter/cards/by-player-class";
import Card from "./card";
import {infiniteScroll} from "../../../../../../../utils/infinite-scroll";

const Cards = ({allCards, deck, playerClass, handleCardClick, updateCurrentCardsLoaded, currentCardsLoaded}) =>{
  const cardsLength = allCards.length;

  const cards = () =>{
    infiniteScroll('.content', updateCurrentCardsLoaded);
    return filterByPlayerClass(allCards, playerClass, currentCardsLoaded)
        .map(card => <Card card={card}
                           deck={deck}
                           key={card.cardId}
                           handleCardClick={handleCardClick}/>
        )
  };

  return (
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