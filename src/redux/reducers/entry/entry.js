const initialState = {
  tos: false
};

export default function(state=initialState, action){
  switch(action.type){
    case 'EDIT_FORM_PROPERTY': return {
      ...state,
      ...action.props
    };
  }
  return state;
}