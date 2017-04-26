export default function(state={}, action){
  switch(action.type){
    case 'EDIT_DECK_PROPERTY': return {
      ...state,
      ...action.props
    };
    case 'SET_DECK_TEXT': return {
      ...state,
      deckText: action.deckText
    };


  }
  return state;
}