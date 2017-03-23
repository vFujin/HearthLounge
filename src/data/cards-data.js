import 'whatwg-fetch';



const fetchData = (state) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1`, {
    headers: {
      'X-Mashape-Key': 'T15rGIqg2lmshwDGMsX3mZeWM7vBp1ZmfvVjsnFba6SXP2WK5Q'
    }
  })
    .then(r=>r.json())
    .then(data => {
      let cards = Object.values(data).reduce((a, b) => a.concat(b)); //all cards returned at once
      // let d = data["Naxxramas"];

      state(cards, data);
    })
};

export const Data = {
  fetchData
};