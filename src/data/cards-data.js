import 'whatwg-fetch';


let cards = [];
const fetchData = (state) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`, {
    headers: {
      'X-Mashape-Key': 'T15rGIqg2lmshwDGMsX3mZeWM7vBp1ZmfvVjsnFba6SXP2WK5Q'
    }
  })
    .then(r=>r.json())
    .then(data => {
      let cards = Object.values(data).reduce((a, b) => a.concat(b)).slice(400, 800); //all cards returned at once
      // let d = data["Naxxramas"];
      state(cards);
    })
};

export const Data = {
  fetchData
};
