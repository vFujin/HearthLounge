import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {getActiveUser} from '../firebase/user/read';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/popover/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/select/style/css';
import {FETCH_PATCH_REQUEST} from "../redux/patch/types";
import {FIREBASE_SIGN_OUT_REQUEST} from "../redux/types/firebase";
import * as types from "../redux/cards/types";


class Main extends Component{
  constructor(props) {
    super(props);

  };
  handleSignOut = () =>{
    const {signOut} = this.props;
    signOut();
  };


  componentDidMount() {
    const {updateCurrentPatch, updateCards, updateActiveUser} = this.props;
    getActiveUser((authenticated, data) => updateActiveUser({authenticated, ...data}));
    updateCurrentPatch();
    updateCards();
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
    const {authenticated, activeUser, children, location, playerClass, current} = this.props;
    const {pathname} = location;
    return (
        <div id="container">
          <Navbar url={pathname}
                  activeUser={activeUser}
                  playerClass={playerClass}
                  handleSignOut={this.handleSignOut}/>
          {React.cloneElement(children, {
            authenticated,
            activeUser,
            patch: current,
            location
          })}

          <Footer pathname={pathname}/>
        </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state =>{
  const {current} = state.patch;
  const {activeUser} = state.users;
  const {playerClass} = state.deckCreation;
  const {authenticated} = activeUser;
  return {current, authenticated, activeUser, playerClass};
};

const mapDispatchToProps = (dispatch) => {

  return {
    updateCurrentPatch: () => dispatch({type: FETCH_PATCH_REQUEST}),
    updateCards: () => dispatch({type: types.FETCH_CARDS_REQUEST}),
    updateActiveUser: (activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', payload: activeUser
    }),
    signOut: () => dispatch({type: FIREBASE_SIGN_OUT_REQUEST})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);