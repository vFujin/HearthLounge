const initialState = {
  deckType: "standard",
  deckArchetype: "quest"
};
export default function(state=initialState, action){
  switch(action.type){
    case 'EDIT_DECK_PROPERTY': return {
      ...state,
      ...action.props
    };
    default: return state;
  }
}