import faker from 'faker';

export const cardback = () => ({
  cardbackId: faker.random.number(),
  name: faker.random.word()
});

export const fakedCardbacksArr = (count = 30) => {
  let cardbacks = [];
  for (let i = 0; i < count; i++){
    cardbacks.push(cardback());
  }
  return cardbacks;
};