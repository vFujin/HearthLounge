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

  test('counts card types in test deck 1', ()=>{
    const eStringifiedValue = stringifyObject(cardTypes(test_deck_1));
    const rStringifiedValue = stringifyObject({"Minion": 3, "Spell": 2, "Weapon": 1});

    expect(eStringifiedValue).toBe(rStringifiedValue)
  });

  test('counts card types in test deck 2', ()=>{
    const eStringifiedValue = stringifyObject(cardTypes(test_deck_2));
    const rStringifiedValue = stringifyObject({"Minion": 4, "Spell": 2});

    expect(eStringifiedValue).toBe(rStringifiedValue)
  });

  test('counts card types in test deck 3', ()=>{
    const eStringifiedValue = stringifyObject(cardTypes(test_deck_3));
    const rStringifiedValue = stringifyObject({"Minion": 4});

    expect(eStringifiedValue).toBe(rStringifiedValue)
  });
});