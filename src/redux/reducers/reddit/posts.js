const initialState = {
  posts: [],
  collapsedComments: [],
  activeCategoryFilter: 'hot'
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_POSTS': return {
      ...state,
      posts: action.posts
    };
    case 'UPDATE_FILTERED_POSTS': return {
      ...state,
      filteredPosts: action.filteredPosts
    };
    case 'UPDATE_ACTIVE_POST': return {
      ...state,
      activePost: action.activePost
    };
    case 'UPDATE_POST_COMMENTS': return {
        ...state,
      postComments: action.postComments
    };
    case 'TOGGLE_COLLAPSE': return {
        ...state,
        collapsedComments: action.collapsedComments
    };
    case 'TOGGLE_DOMAIN_FILTER': return {
      ...state,
      activeDomainFilter: action.activeDomainFilter
    };
    case 'TOGGLE_CATEGORY_FILTER': return {
      ...state,
      activeCategoryFilter: action.activeCategoryFilter
    };
  }
  return state;
}