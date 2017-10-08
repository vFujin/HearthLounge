import {refParent, firestore} from '../../../../keys';
import {getSimplifiedUser} from "../../../user/read/index";
import {endOfWeek, subDays, startOfWeek} from 'date-fns';
import _ from 'lodash';

/**
 * Filters decks
 *
 * @param {bool | string} mainFilter
 * @param {null | string} filterName
 * @param {bool | string} secondaryFilter
 * @param resolve
 * @param reject
 */
export default (mainFilter, filterName, secondaryFilter, resolve, reject) => {
  filterName = filterName === "playerClass" ? "class" : filterName;

  // let now = +new Date(),
  //     start = +startOfWeek(subDays(now, 14)),
  //     end = +endOfWeek(now),
  //     orderBy, startAt, endAt;
  //
  // if (mainFilter && !secondaryFilter) {
  //   orderBy = `${filterName}_timestamp_votes`;
  //   startAt = `${mainFilter}_${start}`;
  //   endAt   = `${mainFilter}_${end}`;
  //   return decksQuery(orderBy, startAt, endAt, resolve, reject);
  //
  // } else if (mainFilter && secondaryFilter) {
  //   orderBy = 'mode_class_timestamp_votes';
  //   startAt = `${mainFilter}_${secondaryFilter}_${start}`;
  //   endAt   = `${mainFilter}_${secondaryFilter}_${end}`;
  //   return decksQuery(orderBy, startAt, endAt, resolve, reject);
  //
  // } else {
  //   orderBy = 'timestamp_votes';
  //   return decksQuery(orderBy, start, end, resolve, reject)
  // }
  // firestore.collection('decks').where('votes', "<=", 200).get().then(querySnapshot=>querySnapshot.forEach(snapshot => console.log(snapshot.data())));

  firestore.collection('decks').get().then(querySnapshot=>{
    let decks = [];
    querySnapshot.forEach(doc => decks.push(doc.data()));
    console.log(decks);
  });

}

/**
 * Assigns username to each deck
 *
 * @param {array} decks
 * @param {object} snapshot - single deck object
 */
const assignUsername = (decks, snapshot) => {
  snapshot.forEach(childSnapshot => {
    getSimplifiedUser(childSnapshot.child("authorId").val(), username => {
      return decks.push(Object.assign(childSnapshot.val(), username));
    });
  });
};

/**
 * Utility function for decks query
 *
 * @param {string} orderBy
 * @param {string | number} startAt
 * @param {string | number} endAt
 * @param resolve
 * @param reject
 */
const decksQuery = (orderBy, startAt, endAt, resolve, reject) => {
  let decksRef = refParent('decks');

  let query = decksRef.orderByChild(orderBy)
      .startAt(`${startAt}_0000`)
      .endAt(`${endAt}_9999`)
      .limitToLast(10);


  return query.once('value', snapshot => {
    let decks = [];
    assignUsername(decks, snapshot);
    resolve(decks);
  }, err => reject(err));
};
