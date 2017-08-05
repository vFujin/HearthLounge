import {maxCardsCostAmount} from '../index';

describe('#countsHighestAmountOfCardsCost', () =>{
  const early_game_deck = [
    {cardId: 'id1', cost: 1},
    {cardId: 'id2', cost: 1},
    {cardId: 'id3', cost: 2},
    {cardId: 'id4', cost: 2},
    {cardId: 'id4', cost: 2},
    {cardId: 'id5', cost: 2},
    {cardId: 'id6', cost: 3},
  ];

  const mid_game_deck = [
    {cardId: 'id1', cost: 1},
    {cardId: 'id2', cost: 11},
    {cardId: 'id3', cost: 10},
    {cardId: 'id4', cost: 11},
    {cardId: 'id5', cost: 3},
    {cardId: 'id6', cost: 12},
    {cardId: 'id7', cost: 4},
  ];

  const late_game_deck = [
    {cardId: 'id1', cost: 10},
    {cardId: 'id2', cost: 11},
    {cardId: 'id3', cost: 10},
    {cardId: 'id4', cost: 7},
    {cardId: 'id5', cost: 7},
    {cardId: 'id6', cost: 3},
    {cardId: 'id7', cost: 9},
  ];

  const testMaxCardCostAmount = (deckType, expectedDeck, expectedValue) => {
    test(`counts highest amount of cards cost in ${deckType} game deck`, ()=>{

      expect(maxCardsCostAmount(expectedDeck)).toBe(expectedValue)
    });
  };

  testMaxCardCostAmount('early', early_game_deck, 4);
  testMaxCardCostAmount('mid', mid_game_deck, 4);
  testMaxCardCostAmount('late', late_game_deck, 6);
});