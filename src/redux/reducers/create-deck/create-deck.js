const initialState = {
  filters: false
};

export default function(state=initialState, action){
  switch(action.type){
    case 'TOGGLE_FILTERS': return {
      ...state,
      filters: action.filters
    };
    case 'SHOW_DECK_EDITING_TOOL': return {
      ...state,
      editingTool: action.editingTool
    }
  }
  return state;
}