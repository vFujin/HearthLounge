import React from 'react';
import Loader from "../../loaders/loader";
import Card from "../assets/card";

export const filteredCardsByMode = (info, cards, mode) =>{
  const {standard} = info;
  const {allCards} = cards;
  const mergedStandardSets = standard.map(set => [].concat(cards[set]));
  const allStandardCards = [].concat(...mergedStandardSets);

  return mode === "standard" ? allStandardCards : allCards;
};

export const mapCards = (props, state) => {
  const {cards, info} = props;
  const {loadedCards, mode, filters} = state;

  if (cards.loading) {
    return <Loader/>
  } else {

    return filteredCardsByMode(info, cards, mode).slice(9).filter(card => {
      const filterObj = Object.entries(filters);

      if(filterObj.length > 0) {
        return filterObj.every(filter => {
          const filterKey = filter[0],
            filterValue = filter[1];

          return card[filterKey] == filterValue;
        });
      }
      return card;
    }).slice(0, loadedCards).map(card => <Card card={card}/>);
  }
};