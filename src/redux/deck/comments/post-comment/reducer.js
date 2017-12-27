import * as types from "./types";

const initialState = {
  loading: false,
  postedComments: {
    countPostedComments: 0,
    comments: []
  }
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
    case types.POST_DECK_COMMENT_REQUEST:
      return {
        ...state,
        loading: true
      };

    case types.POST_DECK_COMMENT_SUCCESS: {
      const {commentId, uid, patch, deckComment} = payload;
      state.postedComments.comments.push({upvotes: 0, downvotes: 0, votes: 0, commentId, authorId: uid, created: +new Date(), patch, text: deckComment});

      return {
        loading: false,
        postedComments: {
          countPostedComments: state.postedComments.comments.length,
          comments: state.postedComments.comments
        }
      }
    }

    case types.POST_DECK_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        err: payload
      };

    case types.RESET_POSTING_LIMIT:
      return state;

    default:
      return state;
  }
}