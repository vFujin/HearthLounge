const initialState = {
  decks: [],
  deckFilters: {},
  redditPosts: [],
  twitchBroadcasters: []
};


export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_DECKS': return {
      ...state,
      decks: action.decks
    };
    case 'UPDATE_DECK_FILTERS': return {
        ...state,
        deckFilters: {
            ...state.deckFilters,
            ...action.deckFilters
        }
    };
    case 'UPDATE_REDDIT_POSTS': return {
      ...state,
      redditPosts: action.redditPosts
    };
    default: return state;
  }
}