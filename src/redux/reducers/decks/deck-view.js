const initialState = {
  commentBoxIsActive: false,
  previewIsActive: false
};

export default function(state=initialState, action) {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        ...action.props
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
    default: return state;
  }
}