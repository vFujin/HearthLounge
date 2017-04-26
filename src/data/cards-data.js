import 'whatwg-fetch';
import {MashapeKey} from '../keys';

let cards = [];
const fetchData = (state) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`, {
    headers: {
      'X-Mashape-Key': MashapeKey
    }
  })
    .then(r=>r.json())
    .then(data => {
      let cards = Object.values(data).reduce((a, b) => a.concat(b)).slice(0, 200); //all cards returned at once
      // let d = data["Naxxramas"];
      state(cards);
    })
};

export const Data = {
  fetchData
};
