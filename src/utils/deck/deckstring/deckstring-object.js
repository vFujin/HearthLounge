export default function (dbfId, playerClass, mode) {

  const playerClassId = () =>{
    switch(playerClass){
      case 'priest': return 813;
      case 'warrior': return 7;
      case 'warlock': return 963;
      case 'mage': return 637;
      case 'druid': return 274;
      case 'hunter': return 31;
      case 'shaman': return 1066;
      case 'paladin': return 671;
      case 'rogue': return 930;
      default: return 0;
    }
  };

  const modeId = () =>{
    switch(mode){
      case 'adventure':
      case 'tavern-brawl':
      case 'wild': return 1;
      default: return 2;
    }
  };

  let deckstringObj ={
    cards: [],
    heroes: [playerClassId()],
    format: [modeId()]
  };

  let cardArr = deckstringObj.cards.find(c => c[0] === dbfId);

  if (!cardArr) {
    cardArr = [dbfId, 0];
    deckstringObj.cards.push(cardArr);
  }

  cardArr[1]++;

  return deckstringObj;
}