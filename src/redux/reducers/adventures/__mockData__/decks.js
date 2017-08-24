import faker from 'faker';

export const deck = () => ({
  deckId: faker.random.number(),
  title: faker.random.word(),
  author: faker.internet.userName()
});

export const fakedDecksArr = (count = 30) => {
  let decks = [];
  for (let i = 0; i < count; i++){
    decks.push(deck());
  }
  return decks;
};