export default function(state={}, action) {
  switch (action.type) {
    case 'UPDATE_COMMENT':
      return {
        ...state,
        ...action.props
      };
    default: return state;
  }
}