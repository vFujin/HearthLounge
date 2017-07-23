import upperFirst from 'lodash/upperFirst';
export default function (cards, playerClass) {
  return cards.filter(card => card.playerClass === upperFirst(playerClass) || card.playerClass === "Neutral");
}