import decode from './decode';
import { deckSimplification } from '../edit-mode/index';
import { error, success } from '../../messages';
import { playerClassIdReverse } from './player-class-id';
import history from '../../../globals/history';

export default function(
  allCards,
  deckstring,
  callback,
  callbackSimplifiedDeck,
  callbackPlayerClass
) {
  let deck = [];
  const decodePromise = new Promise(res => {
    const decodedDeckstring = decode(deckstring);
    if (decodedDeckstring) {
      const playerClass = playerClassIdReverse(decodedDeckstring.heroes[0]);

      decodedDeckstring.cards.map(card => {
        let filteredCard = allCards.find(c => Number(c.dbfId) === card[0]);
        if (filteredCard) {
          deck.push(filteredCard);
          if (card[1] === 2) {
            deck.push(filteredCard);
          }
        }
        return card;
      });

      callback(deck);
      callbackSimplifiedDeck(deckSimplification(deck));
      callbackPlayerClass(playerClass);
      res(playerClass);
    }
  });
  decodePromise
    .then(playerClass => {
      success('Successfuly imported deck!');
      history.push(`/create-deck/${playerClass}`);
    })
    .catch(() => error('Wrong deckstring format!'));
}
