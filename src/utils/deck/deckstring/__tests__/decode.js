import {decodeDeckstring} from "../index"

describe('encodes deck to deckstring', ()=>{

  const test_deck_1 = {
    cards: [[1369, 1], [906, 1], [739, 2], [284, 2]],
    heroes: [813],
    format: 1
  };

  const test_deck_2 = {
    cards: [[1369, 1], [906, 1], [739, 2], [284, 2]],
    heroes: [813],
    format: 2
  };

  const test_deck_3 = {
    cards: [[906, 1], [739, 2], [284, 2]],
    heroes: [1066],
    format: 2
  };

  const test_deck_4 = {
    cards: [[906, 1], [739, 2], [284, 2]],
    heroes: [274],
    format: 1
  };


  const testDecoding = (testingDeckName, format, deckstring, expectedValue) =>{
    test(`encodes ${format} test deck ${testingDeckName} to deckstring`, ()=>{
      expect(deckstring).toEqual(expectedValue);
    })
  };

  testDecoding(1, 'wild', "AAEBAa0GAtkKigcC4wWcAgA=", test_deck_1, );
  testDecoding(2, 'standard', "AAECAa0GAtkKigcC4wWcAgA=", test_deck_2, );
  testDecoding(3, 'standard', "AAECAaoIAYoHAuMFnAIA", test_deck_3, );
  testDecoding(4, 'adventure', "AAEBAZICAYoHAuMFnAIA", test_deck_4,);
});