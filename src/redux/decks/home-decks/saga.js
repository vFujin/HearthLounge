import {firestore} from "../../../keys";
import {call, put, takeEvery} from 'redux-saga/effects';
import * as actions from "./actions";
import * as types from "./types";
import {subDays, startOfWeek} from 'date-fns';
import {getSimplifiedUser} from "../../../firebase/user/read/index";


const assignUsername = (decks, snapshot) => {
  snapshot.forEach(deck => {
    const {authorId} = deck.data();
    getSimplifiedUser(authorId, author => {
      //TODO: change that one to saga
      const {username} = author;
      return decks.push(Object.assign(deck.data(), {username}));
    });
  });
};

export const fetchHotDecks = () => {
  const now = +Date.now();
  const twoWeeks = +startOfWeek(subDays(now, 14));

  let decksRef = firestore.collection('decks').where('created', '>=', twoWeeks).limit(10).get();
  return decksRef
      .then(querySnapshot => {
        let decks = [];
        assignUsername(decks, querySnapshot);
        return {decks};
      })
      .catch(err => ({err: err.message}))
};

export function* fetchHotDecksSaga() {
  const {decks, err} = yield call(fetchHotDecks);
  if(err){
    yield put(actions.fetchHotDecksFailure(err));
  } else {
    yield put(actions.fetchHotDecksSuccess(decks));
  }
}

export function* watchHotDecks() {
  yield takeEvery(types.FETCH_HOT_DECKS_REQUEST, fetchHotDecksSaga)
}