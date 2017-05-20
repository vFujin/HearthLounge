export default function(state={}, action) {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        deckComment: action.deckComment
      };
    default: return state;
  }
}