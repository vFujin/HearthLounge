const initialState = {
  signIn_email: "",
  signIn_password: "",
  signUp_firstStep: "",
  signUp_secondStep: "",
  signUp_username: "",
  signUp_email: "",
  signUp_confirmEmail: "",
  signUp_password: "",
  signUp_confirmPassword: "",
  tos: false,
  resetPasswordView: false
};

export default function(state=initialState, action){
  switch(action.type){
    case 'EDIT_FORM_PROPERTY': return {
      ...state,
      ...action.props
    };
    case 'UPDATE_SIGN_UP_STATUS': return {
        ...state,
      signUp_firstStep: action.signUp_firstStep,
      signUp_secondStep: action.signUp_secondStep
    };
    case 'UPDATE_USERNAME_EXIST_STATUS': return {
        ...state,
      usernameFree: action.usernameFree
    };
    case 'UPDATE_ACTIVE_USER': return {
      ...state,
      authenticated: action.authenticated,
      activeUser: action.activeUser
    };
    case 'TOGGLE_RESET_PASSWORD_VIEW': return {
      ...state,
      resetPasswordView: action.resetPasswordView
      };
    default: return state;
  }
}