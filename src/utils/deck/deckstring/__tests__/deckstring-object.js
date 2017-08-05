import {setDeckstringObj} from "../index";
import {rng} from "../../../test-helpers";

describe('prepares deck object to be ready for deckstring conversion', ()=>{
  let test_playerClass_1 = 'priest';
  let test_playerClass_2 = 'warrior';

  let test_mode_1 = 'adventure';
  let test_mode_2 = 'tavern-brawl';
  let test_mode_3 = 'does-exist-but-is-not-listed-aka-standard';
  let test_mode_4 = 'wild';

  let test_deck_1 = [
    {cardId: rng(), dbfId: 216},
    {cardId: rng(), dbfId: 216},
    {cardId: rng(), dbfId: 739},
    {cardId: rng(), dbfId: 906},
    {cardId: rng(), dbfId: 284},
    {cardId: rng(), dbfId: 284},
    {cardId: rng(), dbfId: 1361}
  ];

  let test_deck_2 = [
    {cardId: rng(), dbfId: 785},
    {cardId: rng(), dbfId: 940},
    {cardId: rng(), dbfId: 940},
    {cardId: rng(), dbfId: 739},
    {cardId: rng(), dbfId: 284}
  ];

  const testDeckToDeckstringObj = (deck, testingPlayerClass, testingMode, expectedValue) =>{
    test(`converts ${testingPlayerClass} deck, ${testingPlayerClass} playerClass and ${testingMode} mode objects to deckstring object`, ()=>{
      let eStringifiedValue = JSON.stringify(setDeckstringObj(deck, testingPlayerClass, testingMode));
      let rStringifiedValue = JSON.stringify(expectedValue);

      expect(eStringifiedValue).toBe(rStringifiedValue);
    })
  };

  //test for deck creation
  // const testCardsValidationInDeck = (testingDeckName, deck, testingPlayerClass1, testingPlayerClass2, testingMode, differentPlayerClassCard) => {
  //   let eStringifiedValue = JSON.stringify(setDeckstringObj(deck, testingPlayerClass1, testingMode));
  //   let rStringifiedValue = JSON.stringify(differentPlayerClassCard);
  //
  //   test(`checks if ${testingPlayerClass1} deck contains ${testingPlayerClass2} cards`, ()=>{
  //     expect(eStringifiedValue).objectContaining(rStringifiedValue);
  //   })
  // };

  testDeckToDeckstringObj(test_deck_1, test_playerClass_1, test_mode_1, {cards: [[216, 2], [739, 1], [906, 1], [284, 2], [1361, 1]], heroes: [813], format: 1});
  testDeckToDeckstringObj(test_deck_1, test_playerClass_1, test_mode_2, {cards: [[216, 2], [739, 1], [906, 1], [284, 2], [1361, 1]], heroes: [813], format: 1});
  testDeckToDeckstringObj(test_deck_1, test_playerClass_1, test_mode_3, {cards: [[216, 2], [739, 1], [906, 1], [284, 2], [1361, 1]], heroes: [813], format: 2});
  testDeckToDeckstringObj(test_deck_1, test_playerClass_1, test_mode_4, {cards: [[216, 2], [739, 1], [906, 1], [284, 2], [1361, 1]], heroes: [813], format: 1});

  testDeckToDeckstringObj(test_deck_2, test_playerClass_2, test_mode_1, {cards: [[785, 1], [940, 2], [739, 1], [284, 1]], heroes: [7], format: 1});
  testDeckToDeckstringObj(test_deck_2, test_playerClass_2, test_mode_2, {cards: [[785, 1], [940, 2], [739, 1], [284, 1]], heroes: [7], format: 1});
  testDeckToDeckstringObj(test_deck_2, test_playerClass_2, test_mode_3, {cards: [[785, 1], [940, 2], [739, 1], [284, 1]], heroes: [7], format: 2});
  testDeckToDeckstringObj(test_deck_2, test_playerClass_2, test_mode_4, {cards: [[785, 1], [940, 2], [739, 1], [284, 1]], heroes: [7], format: 1});
});