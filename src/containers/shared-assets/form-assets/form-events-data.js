import {createUser, signIn} from '../../../utils/auth'
export const events = {
  hideTooltip: function(e){
      let target = e.target.id;
      return this.setState({
        [`${target}_tooltip`]: false
      })
    },
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
  handleFormSubmit: function(e, email, pass){
    e.preventDefault();
    createUser(email, pass);
  },
  handleSignIn: function (e, email, pass) {
    e.preventDefault();
    signIn(email, pass);
  }
};
