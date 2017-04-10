import {createUser, signIn} from '../../../utils/auth'
export const events = {

  handleCheckboxClick: function (key){
    return this.setState({
      [key]: this.state[key] === false
    })
  },
  handleInputChange: function (e){
    const target = e.target;
    const value = e.target.value;
    const id = target.id;
    return this.setState({
      [id]: value
    });
  },
  handleFormSubmit: function(e, email, pass, username){
    e.preventDefault();
    createUser(email, pass, username);
  },
  handleSignIn: function (e, email, pass) {
    e.preventDefault();
    console.log("handle fun:", e.message)
    signIn(email, pass);
  }
};
