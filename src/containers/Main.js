import React, {Component} from 'react';
import firebase from 'firebase';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';
import {getUserData, logout} from '../server/auth';
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
            user: v
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

  render(){
    const {children, location} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname} user={this.state.user} handleLogout={(e)=>logout(e)}/>
          {React.cloneElement(children, {authed: this.state.authed, user: this.state.user})}
          <Footer/>
        </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};

