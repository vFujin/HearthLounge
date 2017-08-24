import {refParent} from '../../../../keys';
import {getSimplifiedUser} from "../../../user/read/index";
import {getTime, subMinutes} from 'date-fns';
export default function (playerClass, callback) {
  let today = +new Date();
  let lastWeek = getTime(subMinutes(today, 50));
  let decksRef = refParent('decks');
  let decks = {};
  if(playerClass){
    console.log(`${lastWeek}_${playerClass}`);
    let pageQuery = decksRef.orderByChild('timestamp_class').startAt(`${lastWeek}_${playerClass}`).limitToLast(10);


    pageQuery.on('child_added', snapshot => {
      getSimplifiedUser(snapshot.child("authorId").val(), username =>  Object.assign(decks, {[snapshot.child("deckId").val()]: Object.assign(snapshot.val(), username)}));

      callback(decks);
      // console.log(_.map(snapshot.val()).filter(deck => deck.playerClass === playerClass));
    })
  } else {
    let pageQuery = decksRef.orderByChild('votes').limitToLast(10);
    pageQuery.on('child_added', snapshot => {
      getSimplifiedUser(snapshot.val().authorId, username => Object.assign(decks, {[snapshot.val().deckId]: Object.assign(snapshot.val(), username)}));

      callback(decks);
    })
  }
}