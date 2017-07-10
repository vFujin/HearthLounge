const initialState = {
  activeUser: null,
  users: []
};

export default function(state=initialState, action){
  switch(action.type){
    case 'UPDATE_ACTIVE_USER': return {
      ...state,
      authenticated: action.authenticated,
      activeUser: {
          ...action.activeUser,
        photoURL: action.photoURL
      }
    };
    case 'UPDATE_USER_LIST': return {
      ...state,
      users: action.users
    };
    default: return state;
  }
}