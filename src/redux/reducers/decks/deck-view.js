const initialState = {
  deckEditing: false,
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
  }
};



export default function(state=initialState, action) {
  switch (action.type) {
    case 'UPDATE_DECK_RATING':
      return {
        ...state,
        deckVote: action.deckVote
      };
    case 'TOGGLE_DECK_EDITING':
      return {
          ...state,
        deckEditing: action.deckEditing
      };
    case 'UPDATE_DECK_DESCRIPTION':
      return {
        ...state,
        editingDeckDescription: action.editingDeckDescription
      };
    case 'UPDATE_DECK_AUTHOR_DETAILS':
      return {
          ...state,
        deckAuthor: action.deckAuthor
      };
    case 'UPDATE_DECKLIST':
      return {
          ...state,
        editingDecklist: action.editingDecklist
      };
    case 'FETCH_COMMENTS':
      return {
        ...state,
        comments: action.comments
      };
    case 'FETCH_USERS_DETAILS':
      return{
          ...state,
          usersDetails: {
            ...action.usersDetails
          }
      };
    case 'FETCH_USER_VOTED_COMMENTS':
      return {
        ...state,
        votedComments: action.votedComments
      };
    case 'UPDATE_COMMENT':
      return {
        ...state,
        ...action.props
      };
    case 'UPDATE_COMMENT_VOTE':
      return {
        ...state,
        vote: action.vote
      };
    case 'UPDATE_COMMENT_VOTES':
      return {
        ...state,
        commentVotes: action.commentVotes
      };
    case 'TOGGLE_COMMENT_BOX':
      return {
        ...state,
        commentBoxIsActive: action.commentBoxIsActive
      };
    case 'TOGGLE_PREVIEW':
      return {
        ...state,
        previewIsActive: action.previewIsActive
      };
    case 'UPDATE_ACTIVE_COMMENT_ID':
      return {
        ...state,
        activeComment: action.activeComment
      };
    default:
      return state;
  }
}