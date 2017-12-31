import * as types from './types';

const initialState = {
  signIn_email: "",
  signUp_firstStep: "",
  signUp_secondStep: "",
  signUp_username: "",
  signUp_email: "",
  signUp_confirmEmail: "",
  tos: false,
};

export default function(state=initialState, action){
  switch(action.type){
    case types.EDIT_FORM_PROPERTY: return {
      ...state,
      ...action.props
    };
    case types.UPDATE_SIGN_UP_STATUS: return {
        ...state,
      signUp_firstStep: action.signUp_firstStep,
      signUp_secondStep: action.signUp_secondStep
    };
    case types.UPDATE_USERNAME_EXIST_STATUS: return {
        ...state,
      usernameFree: action.usernameFree
    };
    case types.UPDATE_ACTIVE_USER: return {
      ...state,
      authenticated: action.authenticated,
      activeUser: action.activeUser
    };
    case types.TOGGLE_RESET_PASSWORD_VIEW: return {
      ...state,
      resetPasswordView: action.resetPasswordView
      };
    default: return state;
  }
}