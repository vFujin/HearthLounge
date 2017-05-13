import {ref, refChild} from '../keys';
let _start = 0;
let _end = 14;
let _n = 15;

export function fetchDecks(callback) {
  return ref.once("value", (snapshot) => callback(snapshot.child(`decks`).val()))
}

export function lazyLoadDecks(callback){
  console.log(refChild);
  refChild('decks').orderByChild('title')
      .startAt(_start)
      .endAt(_end)
      .limitToLast(_n)
      .on("child_added", (snapshot)=>  {
        console.log(snapshot);
        return callback(snapshot.val());
      });
  _start += _n;
  _end += _n;
}