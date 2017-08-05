import {deckLength} from "../index";
import {createTestDeck, rng} from "../../../test-helpers"
describe('#countsDeckLength', ()=>{
  const cardObj = {cardId: rng(), cost: rng()};

  const testDeckLength = (testingDeckName, deck, expectedValue) =>{
    test(`counts test deck ${testingDeckName} length`, ()=>{
      expect(deckLength(deck)).toBe(expectedValue)
    });
  };

  testDeckLength(1, createTestDeck(cardObj, 6), 6);
  testDeckLength(2, createTestDeck(cardObj, 10), 10);
  testDeckLength(3, createTestDeck(cardObj, 2), 2);
  testDeckLength(4, createTestDeck(cardObj, 29), 29);
});