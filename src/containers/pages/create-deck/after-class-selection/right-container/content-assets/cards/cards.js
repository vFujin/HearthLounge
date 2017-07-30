import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Loader from "../../../../../../../components/loader";
import Card from "./card";
import {infiniteScroll} from "../../../../../../../utils/infinite-scroll";
import {filterByUrl} from "../../../../../../../utils/filter/cards/by-url";

const Cards = ({allCards, deck, playerClass, filtersQuery, handleCardClick, updateCurrentCardsLoaded, currentCardsLoaded}) =>{
  const cardsLength = allCards.length;

  const cards = () =>{
    infiniteScroll('.content', updateCurrentCardsLoaded);
    let initialFilteringCards = allCards.filter(card=> card.playerClass === _.upperFirst(playerClass) || card.playerClass === "Neutral");
    return filterByUrl(initialFilteringCards, filtersQuery, currentCardsLoaded).map(card=> <Card card={card}
                                                                              deck={deck}
                                                                              key={card.cardId}
                                                                              handleCardClick={handleCardClick}/>)
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