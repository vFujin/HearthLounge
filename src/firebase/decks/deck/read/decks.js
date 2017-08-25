import {refParent} from '../../../../keys';
import {getSimplifiedUser} from "../../../user/read/index";
import {subDays} from 'date-fns';

export default function (playerClass, callback) {
  let now = +new Date();
  let lastWeek = +subDays(now, 7);
  let decksRef = refParent('decks');
  let decks = {};

  if(playerClass){
    let pageQuery = decksRef.orderByChild('class_timestamp_votes')
                            .startAt(`${playerClass}_${lastWeek}_500`)
                            .endAt(`${playerClass}_${now}_1000`)
                            .limitToLast(10);

    pageQuery.once('value', snapshot => {
      assignUsername(decks, snapshot);
      console.log(decks);
      callback(decks);

    });
  } else {
    let pageQuery = decksRef.orderByChild('votes').limitToLast(10);
    pageQuery.once('value', snapshot => {
      assignUsername(decks, snapshot);
      callback(decks);
    })
  }
}

const assignUsername = (decks, snapshot) =>{
  return snapshot.forEach(childSnapshot => {
    getSimplifiedUser(childSnapshot.child("authorId").val(), username => {
      Object.assign(decks, {
        [childSnapshot.child("deckId").val()]: Object.assign(childSnapshot.val(), username)
      });
    });
  });
};