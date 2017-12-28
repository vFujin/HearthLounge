import React from 'react';
import Loader from "../../loaders/loader";
import Card from "../assets/card";
import {filterCardsByCardSet, filterCardsByMode, filterCardsByPlayerClass, filterCards} from "./filter-cards-by";

export const filter = (state, prefilter, inputMapping = false) =>{
  const {cardNotFound, loadedCards, filters} = state;
  let filteredCards;

  if(inputMapping) {
    filteredCards = filterCards(loadedCards, filters, prefilter);
    if (filteredCards.length === 0) {
      return {error: cardNotFound};
    }
    return filteredCards;
  }

  filteredCards = filterCards(loadedCards, filters, prefilter).map(card => <Card key={card.dbfId} card={card}/>);
  if (filteredCards.length === 0) {
    return <div>{cardNotFound}</div>;
  }
  return filteredCards;
};

export const mapInputCards = (props, state) => {
  const {cards, info} = props;
  const {playerClass, cardSet, mode, inDeckCreation, inExtensions} = state;

  if (cards.loading) {
    return []
  } else {
    if(inDeckCreation){
      const prefilter = filterCardsByPlayerClass(info, cards, playerClass, mode);
      return filter(state, prefilter, true);
    }

    if(inExtensions){
      const prefilter = filterCardsByCardSet(cards, cardSet);
      return filter(state, prefilter, true);
    }

    if(!inDeckCreation && !inExtensions){
      const prefilter = filterCardsByMode(info, cards, mode);
      return filter(state, prefilter, true);
    }
  }
};

export const mapCards = (props, state) => {
  const {cards, info} = props;
  const {playerClass, cardSet, mode, inDeckCreation, inExtensions} = state;

  if (cards.loading) {
    return <Loader/>
  } else {
    if(inDeckCreation){
      const prefilter = filterCardsByPlayerClass(info, cards, playerClass, mode);
      return filter(state, prefilter);
    }

    if(inExtensions){
      const prefilter = filterCardsByCardSet(cards, cardSet);
      return filter(state, prefilter);
    }

    if(!inDeckCreation && !inExtensions){
      const prefilter = filterCardsByMode(info, cards, mode);
      return filter(state, prefilter);
    }
  }
};