import * as types from './types';

const initialState = {
  loading: true
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_SHORTENED_USER_DETAILS_REQUEST:
      return {
        ...state
      };

    case types.FETCH_SHORTENED_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload
      };

    case types.FETCH_SHORTENED_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}