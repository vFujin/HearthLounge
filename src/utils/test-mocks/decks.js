import faker from 'faker';

export const deckCardMock = () =>({
  [faker.random.word()]: {
    amount: faker.random.number({'min': 1, 'max': 2}),
        cost: faker.random.number({'min': 0, 'max': 25}),
        rarity: faker.random.word(),
        set: faker.random.word(),
        type: faker.random.word(),
  }
});

export const deckCardsMock = (count = 30) =>{
  let cards = {};
  for(let i = 0; i<count; i++){
    Object.assign(cards, deckCardMock());
  }
  return cards;
};

export const deckMock = () => ({
  author: faker.internet.userName(),
  authorId: faker.random.number(),
  title: faker.random.word(),
  archetype: faker.random.word(),
  mode: faker.random.word(),
  description: faker.lorem.sentence(),
  created: faker.random.number(),
  deckId: faker.random.number(),
  deck: {
    cards: deckCardsMock()
  },
  comments: faker.random.number(),
});

export const decksMock = (count = 10) =>{
  let decks = [];
  for(let i = 0; i<count; i++){
   decks.push(deckMock());
  }
  return decks;
};