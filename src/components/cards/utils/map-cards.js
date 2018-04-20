import React from 'react';
import Loader from "../../loaders/loader";
import Card from "../assets/card";
import {filterCardsByCardSet, filterCardsByMode, filterCardsByPlayerClass, filterCards} from "./filter-cards-by";

/**
 * Function to divide the filtered cards between card name input field and DOM container
 *
 * @param {object} state - Cards component state.
 * @param {object | object[]} prefilter - Initial filtering if filters are predefined (returns single object if it's card name)
 * @param {boolean} inputMapping - If mapping should be in input or DOM
 * @param {object} props - Cards component props. Getting handleCardClick func & deck objects from it.
 * @return {object | object[] | element} - if card(s) is/are not found returns error object (for input) or element (for DOM),
 *                                         if cards are loaded and/or filtered, returns array of card names (for input) or card objects (for DOM)
 */
export const filter = (state, prefilter, inputMapping = false, props = undefined) =>{
  const {cardNotFound, loadedCards, filters, inDeckCreation} = state;
  let filteredCards;

  if(inputMapping) {
    filteredCards = filterCards(loadedCards, filters, prefilter);
    if (filteredCards.length === 0) {
      return {error: cardNotFound};
    }
    return filteredCards;
  }

  filteredCards = filterCards(loadedCards, filters, prefilter).map(card => <Card key={card.dbfId}
                                                                                 deck={(inDeckCreation && props) && props.deck}
                                                                                 handleCardClick={(inDeckCreation && props) && props.handleCardClick}
                                                                                 card={card}/>);
  if (filteredCards.length === 0) {
    return <div>{cardNotFound}</div>;
  }

  return filteredCards;
};


/**
 * Maps cards to DOM
 *
 * @param {object} props - Cards component props (including redux's cards & info state)
 * @param {object} state - Cards component state
 * @return {object | object[] | element} - if cards are not loaded, returns empty array (for clearing input),
 *                                         if cards are loaded and/or filtered, returns array of card names
 *                                         if filtering returns no results, returns error object
 */
export const mapInputCards = (props, state) => {
  const {cards, info} = props;
  const {playerClass, cardSet, mode, inDeckCreation, inExtensions} = state;

  if (cards.loading) {
    return []
  } else {
    if(inDeckCreation){
      const prefilter = filterCardsByPlayerClass(info, cards, playerClass, mode);
      return filter(state, prefilter, true, props);
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

/**
 * Maps cards to DOM
 *
 * @param {object} props - Cards component props (including redux's cards & info state)
 * @param {object} state - Cards component state
 * @return {object | object[] | element} - if cards are not loaded, returns object error msg,
 *                                         if cards are loaded and/or filtered, returns array of card objects
 *                                         if filtering returns no results, returns NotFound element
 */
export const mapCards = (props, state) => {
  const {cards, info} = props;

  const {playerClass, cardSet, mode, inDeckCreation, inExtensions} = state;

  if (cards.loading || info.loading) {
    return <Loader/>
  } else {
    if(inDeckCreation){
      const prefilter = filterCardsByPlayerClass(info, cards, playerClass, mode);
      return filter(state, prefilter, false, props);
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