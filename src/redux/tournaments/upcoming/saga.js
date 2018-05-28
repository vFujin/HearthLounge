import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from "./types";
import * as actions from "./actions";
import axios from "axios/index";
import {calendarKey, calendarId} from "../../../keys";

const fetchUpcomingTournaments = () => {
  const dateNow = new Date().toISOString();
  const maxResults = 10;

  return axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?maxResults=${maxResults}&orderBy=startTime&singleEvents=true&timeMin=${dateNow}&key=${calendarKey}`)
    .then(({data}) => ({tournaments: data}))
    .catch(error => ({error}));
};

export function* fetchUpcomingTournamentsSaga() {
  const {tournaments, error} = yield call(fetchUpcomingTournaments);

  if(error){
    yield put(actions.fetchUpcomingTournamentsFailure(error));
  } else {
    yield put(actions.fetchUpcomingTournamentsSuccess(tournaments));
  }
}

export function* watchUpcomingTournaments() {
  yield takeEvery(types.FETCH_UPCOMING_TOURNAMENTS_REQUEST, fetchUpcomingTournamentsSaga)
}