const initialState = {
  filtersQuery: {}
};
export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_DECK_CREATION_FILTER': return {
        ...state,
        filtersQuery: {...action.filters}
    };
    default: return state;
  }
}