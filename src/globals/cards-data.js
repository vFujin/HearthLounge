import 'whatwg-fetch';
import {MashapeKey} from '../keys';

const getUniqueAttributes = (data, attribute) =>{
  let initialFiltering = data.filter(x=>x[attribute]).map(x=>x[attribute]);
  let setFiltering = data.filter(c=>c.cardSet === attribute);

  switch(attribute){
    case 'name':
    case 'faction':
    case 'race':
    case 'cardSet':
    case 'type': return initialFiltering.map(x=>x).filter((x, i, a)=>a.indexOf(x) === i);

    case 'cost': return data.filter(x=>x.cost).map(x=>x.cost).filter((x, i, a)=>a.indexOf(x) === i);
    case 'mechanics': return initialFiltering.reduce((a,b)=>a.concat(b)).map(x=>x.name).filter((x, i, a)=>a.indexOf(x) === i);

    case 'Basic':
    case 'Classic':
    case 'Naxxramas':
    case 'Goblins vs Gnomes':
    case 'Blackrock Mountain':
    case 'The Grand Tournament':
    case 'The League of Explorers':
    case 'Whispers of the Old Gods':
    case 'One Night in Karazhan':
    case 'Mean Streets of Gadgetzan':
    case "Journey to Un'Goro":
    case "Knights of the Frozen Throne": return setFiltering;

    default: return null;
  }
};

const cards = (cards) =>{
  return {
    allCards: cards.filter(card=>card.type !== "Hero"),
    name: getUniqueAttributes(cards, 'name'),
    mechanics: getUniqueAttributes(cards, 'mechanics'),
    faction: getUniqueAttributes(cards, 'faction'),
    race: getUniqueAttributes(cards, 'race'),
    type: getUniqueAttributes(cards, 'type'),
    cost: getUniqueAttributes(cards, 'cost'),
    cardSet: getUniqueAttributes(cards, 'cardSet'),
    sets: {
      basic: getUniqueAttributes(cards, 'Basic'),
      classic: getUniqueAttributes(cards, 'Classic'),
      "naxxramas": getUniqueAttributes(cards, 'Naxxramas'),
      "goblins-vs-gnomes": getUniqueAttributes(cards, 'Goblins vs Gnomes'),
      "blackrock-mountain": getUniqueAttributes(cards, 'Blackrock Mountain'),
      "the-grand-tournament": getUniqueAttributes(cards, 'The Grand Tournament'),
      "the-league-of-explorers": getUniqueAttributes(cards, 'The League of Explorers'),
      "whispers-of-the-old-gods": getUniqueAttributes(cards, 'Whispers of the Old Gods'),
      "karazhan": getUniqueAttributes(cards, 'One Night in Karazhan'),
      "mean-streets-of-gadgetzan": getUniqueAttributes(cards, 'Mean Streets of Gadgetzan'),
      "journey-to-ungoro": getUniqueAttributes(cards, "Journey to Un'Goro"),
      "knights-of-the-frozen-throne": getUniqueAttributes(cards, "Knights of the Frozen Throne")
    }
  }
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
      console.log(fetchedCards);
    })
};