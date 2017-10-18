// import {
//   FETCH_COMMENTS,
//   FETCH_USERS_DETAILS,
//   FETCH_USER_VOTED_COMMENTS,
//   TOGGLE_COMMENT_BOX,
//   TOGGLE_PREVIEW,
//   UPDATE_ACTIVE_COMMENT_ID,
//   UPDATE_COMMENT,
//   UPDATE_COMMENT_VOTE,
//   UPDATE_COMMENT_VOTES
// } from "../../types/decks/deck-view";

import * as types from "./types";

const initialState = {
  deckEditView: false,
  comments: [],
  votedComments: {},
  commentBoxIsActive: false,
  previewIsActive: false,
  usersDetails: {},
  commentVotes: {
    upvotes: 0,
    downvoted: 0,
    votes: 0,
    id: ""
  },
  deckComment: '',
  deckCommentControlled: ''
};

export default function(state=initialState, {payload, type}) {
  switch (type) {
      // case 'UPDATE_DECK_RATING':
      //   return {
      //     ...state,
      //     deckVote: action.deckVote
      //   };
      case types.TOGGLE_DECK_EDIT_VIEW:
        return {
          ...state,
          deckEditView: !state.deckEditView
        };
      // case 'UPDATE_DECK_DESCRIPTION':
      //   return {
      //     ...state,
      //     editingDeckDescription: action.editingDeckDescription
      //   };
      // case 'UPDATE_DECK_AUTHOR_DETAILS':
      //   return {
      //     ...state,
      //     deckAuthor: action.deckAuthor
      //   };
      // case FETCH_COMMENTS:
      //   return {
      //     ...state,
      //     comments: action.comments
      //   };
      // case FETCH_USERS_DETAILS:
      //   return {
      //     ...state,
      //     usersDetails: {
      //       ...action.usersDetails
      //     }
      //   };
      // case FETCH_USER_VOTED_COMMENTS:
      //   return {
      //     ...state,
      //     votedComments: action.votedComments
      //   };
    case types.UPDATE_COMMENT_TEXT:
        return {
          ...state,
          deckComment: {...payload}
        };
      // case UPDATE_COMMENT_VOTE:
      //   return {
      //     ...state,
      //     vote: action.vote
      //   };
      // case UPDATE_COMMENT_VOTES:
      //   return {
      //     ...state,
      //     commentVotes: action.commentVotes
      //   };
      case types.TOGGLE_COMMENT_BOX:
        return {
          ...state,
          commentBoxIsActive: payload
        };
      case types.TOGGLE_PREVIEW:
        return {
          ...state,
          previewIsActive: payload
        };
      // case UPDATE_ACTIVE_COMMENT_ID:
      //   return {
      //     ...state,
      //     activeComment: action.activeComment
      //   };
    default:
      return state;
  }
}