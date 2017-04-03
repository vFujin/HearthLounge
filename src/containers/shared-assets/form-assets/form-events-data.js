import * as firebase from 'firebase'
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
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

    firebase.auth().onAuthStateChanged(user => {
      if(user){
        console.log(user);
      }
      else{
        console.log('not loggedi n')
      }
    })
  },
  handleSignIn: function (e, email, pass) {
      e.preventDefault();
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
  }
};
