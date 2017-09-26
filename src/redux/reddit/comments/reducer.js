// import * as types from "./types";
//
// const initialState = {
//   loading: true
// };
//
// export default function(state=initialState, {type, payload}) {
//   switch (type) {
//     case types.FETCH_REDDIT_POST_COMMENTS_REQUEST:
//       return {
//         ...state,
//         loading: true
//       };
//
//     case types.FETCH_REDDIT_POST_COMMENTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         all: payload
//       };
//     case types.FETCH_REDDIT_POST_COMMENTS_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: payload
//       };
//
//     case types.CLEAR_POST_COMMENTS:
//       return {
//         loading: true
//       };
//
//     default:
//       return state;
//   }
// }