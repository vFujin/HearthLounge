import toLower from 'lodash/toLower';

export const cardRarityBackground = (rarity, windowWidth) =>{
  return `${toLower(rarity)} ${windowWidth <= 1365 ? "gradient-full" : "gradient"}`;
};