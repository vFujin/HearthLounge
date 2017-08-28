import {refParent} from '../../../../keys';
import {getSimplifiedUser} from "../../../user/read/index";
import {endOfWeek, subDays, startOfWeek} from 'date-fns';

/**
 * Filters decks
 *
 * @param {bool | string} mainFilter
 * @param {null | string} filterName
 * @param {bool | string} secondaryFilter
 * @param {object} callback
 */
export default function (mainFilter, filterName , secondaryFilter, callback) {
  filterName = filterName === "playerClass" ? "class" : filterName;

  let now = +new Date(),
      start = +startOfWeek(subDays(now, 7)),
      end = +endOfWeek(now),
      orderBy, startAt, endAt;

  if (mainFilter && !secondaryFilter) {
    orderBy = `${filterName}_timestamp_votes`;
    startAt = `${mainFilter}_${start}`;
    endAt   = `${mainFilter}_${end}`;
    decksQuery(orderBy, startAt, endAt, callback);

  } else if (mainFilter && secondaryFilter) {
    orderBy = 'mode_class_timestamp_votes';
    startAt = `${mainFilter}_${secondaryFilter}_${start}`;
    endAt   = `${mainFilter}_${secondaryFilter}_${end}`;
    decksQuery(orderBy, startAt, endAt, callback);

  } else {
    orderBy = 'timestamp_votes';
    decksQuery(orderBy, start, end, callback)
  }
}

/**
 * Assigns username to each deck
 *
 * @param {array} decks
 * @param {object} snapshot - single deck object
 */
const assignUsername = (decks, snapshot) =>{
  return snapshot.forEach(childSnapshot => {
    getSimplifiedUser(childSnapshot.child("authorId").val(), username => {
      Object.assign(decks, {
        [childSnapshot.child("deckId").val()]: Object.assign(childSnapshot.val(), username)
      });
    });
  });
};

/**
 * Utility function for decks query
 *
 * @param {string} orderBy
 * @param {string | number} startAt
 * @param {string | number} endAt
 * @param {object} callback
 */
const decksQuery = (orderBy, startAt, endAt, callback) =>{
  let decksRef = refParent('decks');
  let decks = {};
  let query = decksRef.orderByChild(orderBy)
      .startAt(`${startAt}_0000`)
      .endAt(`${endAt}_9999`)
      .limitToLast(10);

  query.once('value', snapshot => {
    assignUsername(decks, snapshot);
    callback(decks);
  });
};
