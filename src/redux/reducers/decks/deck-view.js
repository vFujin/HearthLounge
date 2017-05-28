const initialState = {
  comments: [],
  votedComments: {},
  commentBoxIsActive: false,
  previewIsActive: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return {
        ...state,
        comments: action.comments
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
    case 'UPDATE_COMMENT_VOTES':
      return {
        ...state,
        commentId: {
            ...action.commentId
        },
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