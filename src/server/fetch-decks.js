import {refParent} from '../keys';
// let _start = 0;
// let _end = 14;
// let _n = 15;

export function lazyLoadDecks(callback, playerClass){
  if(playerClass !== null) {

    refParent('decks')
        .orderByChild('hsClass')
        .equalTo(playerClass)
        .on("value", snapshot => {
          console.log(snapshot.val());
          callback(snapshot.val());
        });
  }
  else{
    refParent('decks')
        .orderByChild('hsClass')
        .on("value", snapshot=> {
          callback(snapshot.val());
        });
  }
  // refChild('decks').orderByChild('title')
  //     .startAt(_start)
  //     .endAt(_end)
  //     .limitToLast(_n)
  //     .on("child_added", (snapshot)=>  {
  //       console.log(snapshot);
  //       return callback(snapshot.val());
  //     });
  // _start += _n;
  // _end += _n;
}