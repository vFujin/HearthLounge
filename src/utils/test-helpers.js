export const rng = (max = 10) =>{
  return Math.floor((Math.random() * max) + 1);
};

export const createTestDeck = (cardObj, amountOfCards) =>{
  let deck = [];

  for(let i = 0; i<amountOfCards;i++){
    deck.push(cardObj)
  }
  return deck;
};

export const callbackHelper = (data, expectedData, done) =>{
    let eStringifiedData = JSON.stringify(data);
    let rStringifiedData = JSON.stringify(expectedData);

    expect(eStringifiedData).toBe(rStringifiedData);
    done();
};