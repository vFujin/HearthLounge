import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";
import axios from "axios/index";
import {calendarKey} from "../../keys";

const fetchTournaments = () => {
  const calendarId = "kvaverirkumds90dnen1jlmmq0dcvgom%40import.calendar.google.com";

  return axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${calendarKey}`)
    .then(({data}) => ({tournaments: data}))
    .catch(error => ({error}));
};

export function* fetchTournamentsSaga() {
  const {tournaments, error} = yield call(fetchTournaments);

  if(error){
    yield put(actions.fetchTournamentsFailure(error));
  } else {
    yield put(actions.fetchTournamentsSuccess(tournaments));
  }
}

export function* watchTournaments() {
  yield takeEvery(types.FETCH_TOURNAMENTS_REQUEST, fetchTournamentsSaga)
}