import * as types from "./types";

const initialState = {
  loading: false,
  deletedComments: {
    deletedCommentIds: [],
    countDeletedComments: 0
  }
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.DELETE_DECK_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.DELETE_DECK_COMMENT_SUCCESS: {
      const {deletedCommentIds} = state.deletedComments;
      deletedCommentIds.push(payload);
      return {
        loading: false,
        deletedComments: {
          deletedCommentIds,
          countDeletedComments: deletedCommentIds.length
        }
      };
    }

    case types.DELETE_DECK_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        err: payload
      };

    default:
      return state;
  }
}