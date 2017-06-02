const initialState = {
  signIn_email: "",
  signIn_password: "",
  signUp_username: "",
  signUp_email: "",
  signUp_confirmEmail: "",
  signUp_password: "",
  signUp_confirmPassword: "",
  tos: false
};

export default function(state=initialState, action){
  switch(action.type){
    case 'EDIT_FORM_PROPERTY': return {
      ...state,
      ...action.props
    };
  }
  return state;
}