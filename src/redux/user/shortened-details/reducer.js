import * as types from './types';

const initialState = {
  loading: false
};

export default function(state=initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_SHORTENED_USER_DETAILS_REQUEST:
      return {
        loading: true,
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
        loading: false,
        error: payload
      };

    case types.RESET_SHORTENED_USER_DETAILS:
      return {
        loading: false
      };

    default:
      return state;
  }
}