import {uniqueCards} from "../index";

describe('#countsUniqueCards', ()=>{

  const test_card_1 = {cardId: 'id1', cost: 1},
        test_card_2 = {cardId: 'id5', cost: 4},
        test_card_4 = {cardId: 'id6', cost: 2},
        test_card_5 = {cardId: 'id8', cost: 4},
        test_card_6 = {cardId: 'id10', cost: 4},
        test_card_7 = {cardId: 'id14', cost: 4};

  const test_deck_1 = [
    {cardId: 'id1', cost: 1},
    {cardId: 'id5', cost: 4},
    {cardId: 'id1', cost: 1},
    {cardId: 'id6', cost: 2},
    {cardId: 'id8', cost: 4},
  ];

  const test_deck_2 = [
    {cardId: 'id10', cost: 1},
    {cardId: 'id14', cost: 4},
    {cardId: 'id10', cost: 1},
    {cardId: 'id6', cost: 2},
    {cardId: 'id6', cost: 2},
  ];

  const testCalculatingUniqueCards = (testingDeckName, deck, cardId, expectedValue) =>{
    test(`calculates unique cards in test deck ${testingDeckName}`, ()=>{
      expect(uniqueCards(deck, cardId)).toBe(expectedValue);
    })
  };

  testCalculatingUniqueCards(1, test_deck_1, test_card_1, 2);
  testCalculatingUniqueCards(1, test_deck_1, test_card_2, 1);
  testCalculatingUniqueCards(1, test_deck_1, test_card_6, 0);

  testCalculatingUniqueCards(2, test_deck_2, test_card_7, 1);
  testCalculatingUniqueCards(2, test_deck_2, test_card_6, 2);
  testCalculatingUniqueCards(2, test_deck_2, test_card_4, 2);
  testCalculatingUniqueCards(2, test_deck_2, test_card_5, 0);
});