const initialState = {
  decks: [],
  redditPosts: [],
  twitchBroadcasters: []
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_DECKS': return {
      ...state,
      decks: action.decks
    };
    case 'UPDATE_REDDIT_POSTS': return {
      ...state,
      redditPosts: action.redditPosts
    };
    default: return state;
  }
}