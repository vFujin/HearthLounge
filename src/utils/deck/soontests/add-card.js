import {addCard} from "../index";

describe("adds card to deck", ()=>{

  const test_card_1 = {cardSet: "set3", cost: 4, name: "randomName_5", rarity: "rare", type: "spell"};
  const test_card_2 = {cardSet: "set", cost: 2, name: "randomName_6", rarity: "common", type: "minion"};

  const test_deck_1 = [
    {cardSet: "set", cost: 1, name: "randomName_1", rarity: "rare", type: "spell"},
    {cardSet: "set", cost: 1, name: "randomName_1", rarity: "rare", type: "spell"},
    {cardSet: "set2", cost: 6, name: "randomName_2", rarity: "legendary", type: "minion"},
    {cardSet: "set4", cost: 2, name: "randomName_3", rarity: "common", type: "minion"},
    {cardSet: "set2", cost: 4, name: "randomName_4", rarity: "epic", type: "weapon"},
  ];

  const testCardAddition = (testingDeckName, deck, card, expectedValue) =>{
    test(`adds ${card} to test deck ${testingDeckName}`, ()=>{
      let eStringifiedValue = addCard(deck)
      expect(deck)
    })
  }


});