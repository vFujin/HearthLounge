import {encodeDeckstring} from "../index"

describe('encodes deck to deckstring', ()=>{

  const test_deck_1 = {
    cards: [[739, 2], [1369, 1], [284, 2], [906, 1]],
    heroes: [813],
    format: 1
  };

  const test_deck_2 = {
    cards: [[739, 2], [1369, 1], [284, 2], [906, 1]],
    heroes: [813],
    format: 2
  };

  const test_deck_3 = {
    cards: [[739, 2], [284, 2], [906, 1]],
    heroes: [1066],
    format: 2
  };

  const test_deck_4 = {
    cards: [[739, 2], [284, 2], [906, 1]],
    heroes: [274],
    format: 1
  };


  const testDecoding = (testingDeckName, format, deck, expectedValue) =>{
    test(`encodes ${format} test deck ${testingDeckName} to deckstring`, ()=>{
      expect(encodeDeckstring(deck)).toBe(expectedValue);
    })
  };

  testDecoding(1, 'wild', test_deck_1, "AAEBAa0GAtkKigcC4wWcAgA=");
  testDecoding(2, 'standard', test_deck_2, "AAECAa0GAtkKigcC4wWcAgA=");
  testDecoding(3, 'standard', test_deck_3, "AAECAaoIAYoHAuMFnAIA");
  testDecoding(4, 'adventure', test_deck_4, "AAEBAZICAYoHAuMFnAIA");
});