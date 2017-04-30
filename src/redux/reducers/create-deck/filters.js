export default function(state={}, action){
  switch(action.type){
    case 'UPDATE_FILTER': return {
        ...state,
        ...action.filters
    };
    default: return state;
  }
}