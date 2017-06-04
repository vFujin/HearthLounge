import 'whatwg-fetch';
import {MashapeKey} from '../keys';


const getUniqueAttributes = (data, attribute) =>{
  let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);

  switch(attribute){
    case 'name':
    case 'faction':
    case 'race':
    case 'cardSet':
    case 'type': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) === i);

    case 'cost': return data.filter(x=>x.cost).map(x=>x.cost).filter((x, i, a)=>a.indexOf(x) === i);
    case 'mechanics': return initialFiltering.reduce((a,b)=>a.concat(b)).map(x=>x.name).filter((x, i, a)=>a.indexOf(x) === i);
    default: return null;
  }
};

const cards = (cards) =>{
  return {
    allCards: cards,
    name: getUniqueAttributes(cards, 'name'),
    mechanics: getUniqueAttributes(cards, 'mechanics'),
    faction: getUniqueAttributes(cards, 'faction'),
    race: getUniqueAttributes(cards, 'race'),
    type: getUniqueAttributes(cards, 'type'),
    cost: getUniqueAttributes(cards, 'cost'),
    cardSet: getUniqueAttributes(cards, 'cardSet')

  };
};

export const fetchData = (reducer) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`, {
    headers: {
      'X-Mashape-Key': MashapeKey
    }
  })
    .then(r=>r.json())
    .then(data => {
      let fetchedCards = Object.values(data).reduce((a, b) => a.concat(b)); //all cards returned at once
      // let d = data["Naxxramas"];

      reducer(cards(fetchedCards));
    })
};