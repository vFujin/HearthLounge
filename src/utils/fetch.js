import {MashapeKey} from "../keys";

export const fetchCardback = (callback) => {
  fetch(`https://omgvamp-hearthstone-v1.p.mashape.com/cardbacks`, {
    headers: {
      "X-Mashape-Key": MashapeKey
    }
  })
      .then(res => res.json())
      .then(res => callback(res));
};