import toLower from 'lodash/toLower';

export const cardRarityBackground = (rarity) =>{
  return `${toLower(rarity)} gradient`;
};