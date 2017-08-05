import {calcManaCurve} from "../index"

describe('#calculatesManaCurve', ()=>{
  const test_deck_1 = [
    {cardId: 'id1', cost: 1},
    {cardId: 'id6', cost: 2},
    {cardId: 'id7', cost: 3},
    {cardId: 'id1', cost: 1},
    {cardId: 'id2', cost: 1},
    {cardId: 'id4', cost: 5},
    {cardId: 'id6', cost: 8},
  ];

  const test_deck_2 = [
    {cardId: 'id3', cost: 0},
    {cardId: 'id1', cost: 1},
    {cardId: 'id1', cost: 1},
    {cardId: 'id1', cost: 1},
    {cardId: 'id7', cost: 9},
    {cardId: 'id1', cost: 4},
    {cardId: 'id2', cost: 7},
    {cardId: 'id2', cost: 7},
    {cardId: 'id6', cost: 10},
  ];

  const testCalculatesManaCurve = (testingDeckName, deck, expectedValue) =>{
    test(`calculates test deck ${testingDeckName} mana curve`, ()=>{
      let stringifiedDeck = JSON.stringify(calcManaCurve(deck));
      let stringifiedValue = JSON.stringify(expectedValue);
      expect(stringifiedDeck).toBe(stringifiedValue)
    })
  };

  testCalculatesManaCurve(1, test_deck_1, {0:0, 1:3, 2:1, 3:1, 4:0, 5:1, 6:0, 7:1});
  testCalculatesManaCurve(2, test_deck_2, {0:1, 1:3, 2:0, 3:0, 4:1, 5:0, 6:0, 7:4});
});