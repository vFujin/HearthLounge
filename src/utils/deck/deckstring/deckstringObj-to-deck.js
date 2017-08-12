// let deckstringObj = {
//   cards: [[901, 2]],
//   heroes: [playerClassId()],
//   format: modeId()
// };

import decode from "./decode";

export default function (allCards, deckstring, callback) {

    let deck = [];

    decode(deckstring).cards.map(card => {
      let filteredCard = allCards.find(c => Number(c.dbfId) === card[0]);
      if(filteredCard) {
        deck.push(filteredCard);
        if(card[1] === 2){
          deck.push(filteredCard);
        }
      }
    });

    callback(deck);
}