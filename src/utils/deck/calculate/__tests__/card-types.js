import {cardTypes} from "../index"

describe('#countsCardTypes', ()=>{
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
  ];

  const test_deck_3 = [
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id2', type: "Minion"},
    {cardId: 'id1', type: "Minion"},
    {cardId: 'id4', type: "Minion"}
  ];

  const stringifyObject = (value) =>{
    return JSON.stringify(value);
  };

  const testCountedCardTypes = (deckType, expectedDeck, expectedValue) => {
    test(`counts amount of card types in test deck ${deckType}`, ()=>{
      const eStringifiedValue = stringifyObject(cardTypes(expectedDeck));
      const rStringifiedValue = stringifyObject(expectedValue);

      expect(eStringifiedValue).toBe(rStringifiedValue)
    });
  };

  testCountedCardTypes('1', test_deck_1, {"Minion": 3, "Spell": 2, "Weapon": 1});
  testCountedCardTypes('2', test_deck_2, {"Minion": 4, "Spell": 2});
  testCountedCardTypes('3', test_deck_3, {"Minion": 4});
});