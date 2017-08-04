export default function (deck){
  let types = {};
  deck.map(card => card.type).forEach(cardType => types[cardType] = (types[cardType] || 0) + 1);
  return types;
}