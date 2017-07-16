import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {getActiveUser} from '../firebase/user/read';
import {signOut} from '../firebase/user/utils';
import {fetchData, fetchPatchData} from '../data/cards-data';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/dropdown/style/css';

class Main extends Component{
  constructor(props) {
    super(props);
    getActiveUser(props.updateActiveUser);
  };


  componentDidMount() {
    fetchPatchData(this.props.updateCurrentPatch);
    fetchData(this.props.updateCards);
  }

  // shouldComponentUpdate(nextProps){
  //   const {cards, patch} = this.props;
  //   if(cards !== nextProps.cards || patch !== nextProps.patch){
  //     return false
  //   } else {
  //     return true
  //   }
  // }



  render(){
    const {authenticated, activeUser, children, location, cards, patch} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname} user={this.props.activeUser} handleLogout={(e)=>signOut(e)}/>
          {React.cloneElement(children, {
            authenticated,
            activeUser,
            cards,
            patch
          })}
          <Footer/>
        </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state =>{
  const {cards, patch} = state.cards;
  const {authenticated, activeUser} = state.users;
  return {cards, patch, authenticated, activeUser};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentPatch: patch => dispatch({
      type: 'UPDATE_CURRENT_PATCH', patch
    }),
    updateCards: (cards) => dispatch({
      type: 'UPDATE_CARDS', cards
    }),
    updateActiveUser: (authenticated, activeUser, photoURL) => dispatch({
      type: 'UPDATE_ACTIVE_USER', authenticated, activeUser, photoURL
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);