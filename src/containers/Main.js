import React, {Component} from 'react';
import firebase from 'firebase';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';
import {getUserData, logout} from '../utils/auth';
import 'antd/lib/tooltip/style/css';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      user: null,
      email: null
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserData(user.uid, (v)=>{
          console.log(v);
          this.setState({
            authed: true,
            user: v.username,
            email: v.email
          });
        });
      }
      else {
        this.setState({
          authed: false,
          user: null,
          email: null
        })
      }
    })
  }

  handleLogout(e){
    e.preventDefault();
    firebase.auth().signOut();
  }

  render(){
    console.log(this.state.authed);
    const {children, location} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname} user={this.state.user} handleLogout={(e)=>logout(e)}/>
          {React.cloneElement(children, {authed: this.state.authed, username: this.state.user, email: this.state.email})}
          <Footer/>
        </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};