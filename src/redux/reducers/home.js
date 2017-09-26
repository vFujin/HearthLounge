const initialState = {
  deckFilters: {},
  redditPosts: [],
  twitchBroadcasters: []
};


export default function(state=initialState, {type, payload}){
  switch(type){
    case 'UPDATE_DECK_FILTERS': return {
        ...state,
            ...state.deckFilters,
            ...payload

    };
    default: return state;
  }
}