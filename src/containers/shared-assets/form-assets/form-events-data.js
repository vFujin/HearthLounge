import {createUser, signIn} from '../../../utils/auth'
export const events = {

  handleCheckboxClick: function (key){
    return this.setState({
      [key]: this.state[key] === false
    })
  },

  handleSignIn: function (e, email, pass) {
    e.preventDefault();
    console.log("handle fun:", e.message)
    signIn(email, pass);
  }
};
