import {deckLength} from "../index";

describe('#countsDeckLength', ()=>{
  const test_deck_1 = [
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id2', type: "Minion"},
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id3', type: "Spell"},
    {cardId: 'id4', type: "Weapon"},
    {cardId: 'id5', type: "Spell"},
  ];

  const test_deck_2 = [
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id2', type: "Minion"},
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id3', type: "Spell"},
    {cardId: 'id4', type: "Minion"},
    {cardId: 'id5', type: "Spell"},
    {cardId: 'id5', type: "Spell"},
    {cardId: 'id5', type: "Spell"},
    {cardId: 'id5', type: "Spell"},
    {cardId: 'id5', type: "Spell"}
  ];

  const test_deck_3 = [
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id2', type: "Minion"}
  ];

  const testDeckLength = (testingDeckName, deck, expectedValue) =>{
    test(`counts test deck ${testingDeckName} length`, ()=>{
      expect(deckLength(deck)).toBe(expectedValue)
    });
  };

  testDeckLength(1, test_deck_1, 6);
  testDeckLength(1, test_deck_2, 10);
  testDeckLength(3, test_deck_3, 2);
});