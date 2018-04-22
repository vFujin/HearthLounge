import * as types from './types';

const initialState = {
  loading: false
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_ALL_USERS_REQUEST:
      return {
        loading: true
      };

    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload
      };

    case types.FETCH_ALL_USERS_FAILURE:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}