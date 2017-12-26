import React from 'react';
import _ from 'lodash';
import Loader from "../../loaders/loader";
import Card from "../assets/card";

export const matchFilteredCards = (filters, card) =>{
  const filterObj = Object.entries(filters);
  if (filterObj.length > 0) {
    return filterObj.every(filter => {
      const filterKey = filter[0],
            filterValue = filter[1];

      if(filterValue && card[filterKey] && filterValue.constructor === Array){
          if(filterValue.every(element => typeof element === 'number')) {
            return card[filterKey] >= filterValue[0] && card[filterKey] <= filterValue[1];
          }
        if(filterValue.every(element => typeof element === 'string')){
          return filterValue.includes(card[filterKey]);
        }
      }

      if(filterKey === "mechanic" && card[`${filterKey}s`]){
        const mappedCardMechanics = card[`${filterKey}s`].map(mechanic=>mechanic[`name`]);
        return filterValue.some(mechanic => mappedCardMechanics.includes(mechanic));
      }

      return _.kebabCase(_.toLower(card[filterKey])) == _.kebabCase(_.toLower(filterValue));
    });
  }
  return card;
};

export const filteredCardsByMode = (info, cards, mode) =>{
  const {standard} = info;
  const {allCards} = cards;
  const mergedStandardSets = standard.map(set => [].concat(cards[set]));
  const allStandardCards = [].concat(...mergedStandardSets);

  return mode === "standard" ? allStandardCards : allCards;
};

export const filterCards = (props, state) => {
  const {cards, info} = props;
  const {loadedCards, mode, filters} = state;

  return filteredCardsByMode(info, cards, mode)
    .slice(9)
    .filter(card => matchFilteredCards(filters, card))
    .slice(0, loadedCards);
};

export const mapInputCards = (props, state) => {
  const {cards} = props;
  const {cardNotFound} = state;
  if (cards.loading) {
    return []
  } else {
    const filteredCards = filterCards(props, state);
    if(filteredCards.length === 0){
      return {error: cardNotFound};
    }
    return filteredCards;
  }
};

export const mapCards = (props, state) => {
  const {cards} = props;
  const {cardNotFound} = state;

  if (cards.loading) {
    return <Loader/>
  } else {
    const filteredCards = filterCards(props, state).map(card => <Card key={card.dbfId} card={card}/>);
    if(filteredCards.length === 0){
      return <div>{cardNotFound}</div>
    }
    return filteredCards;
  }
};