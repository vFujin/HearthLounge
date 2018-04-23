import {playerClassId} from "./player-class-id";

export default function (deck, playerClass, mode) {
  const modeId = () =>{
    switch(mode){
      case 'adventure':
      case 'tavern-brawl':
      case 'wild': return 1;
      default: return 2;
    }
  };

  let deckstringObj = {
    cards: [],
    heroes: [playerClassId()],
    format: modeId()
  };

  deck.filter(card=> {
    const {dbfId} = card;
    let cardArr = deckstringObj.cards.find(c => Number(c[0]) === Number(dbfId));

    if (!cardArr) {
      cardArr = [Number(dbfId), 0];
      deckstringObj.cards.push(cardArr);
    }
    return cardArr[1]++;
  });
  return deckstringObj;
}