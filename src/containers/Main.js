import React, {Component} from 'react';
import firebase from 'firebase';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';
import {getUserData} from '../utils/auth';
import 'antd/lib/tooltip/style/css';

export class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      user: null
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserData(user.uid, (v)=>{
          this.setState({
            authed: true,
            user: v.username
          });
        });
      }
      else {
        this.setState({
          authed: false,
          user: null
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
          <Navbar url={location.pathname} user={this.state.user} handleLogout={(e)=>this.handleLogout(e)}/>
          {React.cloneElement(children, {authed: this.state.authed})}
          <Footer/>
        </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};