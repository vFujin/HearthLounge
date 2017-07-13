import {ref, refParent} from '../../../../keys';
// import {success, loading, error} from '../../utils/messages';

let data = [];
let now = new Date();
let week = now.setDate(now.getDate() - 7);
let _start = now.setDate(now.getDate() - 1);
let _end = +new Date();
let _n = 15;
export default function (callback, playerClass) {
  let decksRef = ref.child('decks');
  console.log("before", data)
  decksRef.orderByChild('created')
      .startAt(_start)
      .endAt(_end)
      .limitToLast(_n)
      .once("value", snapshot=> {
        // console.log(_start, _end)
        data.push(snapshot.val());

        callback(snapshot.val());
        console.log("after", data)
      });
  _start = _start - 2629743*3;
  _end = now.setDate(now.getDate() - 30);
}








