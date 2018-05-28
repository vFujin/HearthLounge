import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";
import axios from "axios/index";
import {calendarId, calendarKey} from "../../../keys";

const fetchTournaments = () => {
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