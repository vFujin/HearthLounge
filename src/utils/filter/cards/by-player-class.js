import upperFirst from 'lodash/upperFirst';
import {filterCards} from "../cards";

const findPlayerClass = (card, playerClass) =>{
  return card.playerClass === upperFirst(playerClass) || card.playerClass === "Neutral";
};

export const filterByPlayerClass = (cards, query, currentItemsLoaded) =>{
  return filterCards(cards, findPlayerClass, query, currentItemsLoaded);
};