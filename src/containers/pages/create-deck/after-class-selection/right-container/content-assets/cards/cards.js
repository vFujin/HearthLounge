import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Loader from "../../../../../../../components/loader";
import Card from "./card";
import {infiniteScroll} from "../../../../../../../utils/infinite-scroll";
import {filterByUrl} from "../../../../../../../utils/filter/cards/by-url";

const Cards = ({cards, deck, playerClass, filtersQuery, filteredCards, handleCardClick, updateCurrentCardsLoaded, currentCardsLoaded}) =>{
  const {allCards, loading} = cards;
  const mapCards = () =>{
      infiniteScroll('.content', updateCurrentCardsLoaded);
      let initialFilteringCards = (filteredCards || allCards).filter(card => card.playerClass === _.upperFirst(playerClass) || card.playerClass === "Neutral");

      return filterByUrl(initialFilteringCards, filtersQuery, currentCardsLoaded).map(card => <Card card={card}
                                                                                                    deck={deck}
                                                                                                    key={card.cardId}
                                                                                                    handleCardClick={handleCardClick}/>)
  };

  return (
        <ul className="container__cards">
          {
            loading
              ? <Loader />
              : mapCards()
          }
        </ul>
  )
};



Cards.propTypes = {
  cards: PropTypes.object.isRequired
};

export default Cards;