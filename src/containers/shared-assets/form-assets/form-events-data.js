import {createUser, signIn} from '../../../server/auth'
export const events = {

  handleCheckboxClick: function (key){
    return this.setState({
      [key]: this.state[key] === false
    })
  },

  handleSignIn: function (e, email, pass) {
    e.preventDefault();
    signIn(email, pass);
  }
};
