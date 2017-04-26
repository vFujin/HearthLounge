export default function(state={}, action){
  switch(action.type){
    case 'SET_DECK_TEXT': return {
        ...state,
        deckText: action.deckText
    };
    case 'SET_DECK_TITLE': return {
        ...state,
        deckTitle: action.deckTitle
    }
  }
  return state;
}