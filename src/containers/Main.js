import React, {Component} from 'react';
import firebase from 'firebase';
import Navbar from './layout/navbar';
import {Footer} from './layout/footer';
import {getUserData, logout} from '../server/auth';
import 'antd/lib/tooltip/style/css';
import {fetchData} from '../data/cards-data';
import {connect} from 'react-redux';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      authed: false,
      user: null,
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

  componentDidMount(){
    fetchData(this.props.updateCards);
  }


  render(){
    const {authed, user} = this.state;
    const {children, location, cards} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname} user={user} handleLogout={(e)=>logout(e)}/>
          {React.cloneElement(children, {
            authed,
            user,
            cards
          })}
          <Footer/>
        </div>
    );
  }
}


Main.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
};


const mapStateToProps = (state) =>{
  const {cards} = state.cards;
  return {
    cards
  };
};




const mapDispatchToProps = (dispatch) => {
  return {
    updateCards: (cards) => dispatch({
      type: 'UPDATE_CARDS', cards
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);