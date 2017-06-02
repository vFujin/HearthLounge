export default function(state={}, action){
  switch(action.type){
    case 'EDIT_FORM_PROPERTY': return {
      ...state,
      ...action.props
    };
  }
  return state;
}