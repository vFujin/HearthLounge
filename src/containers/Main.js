import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {getActiveUser} from '../firebase/user/read';
import {signOut} from '../firebase/user/utils';
import {fetchData} from '../data/cards-data';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/dropdown/style/css';
import 'antd/lib/popover/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/select/style/css';
import {fetchPatch} from "../redux/sagas/current-hs-patch.saga";
import {FETCH_PATCH_REQUEST} from "../redux/types/current-hs-patch";


class Main extends Component{
  constructor(props) {
    super(props);

  };


  componentDidMount() {
    const {updateCurrentPatch, updateCards} = this.props;
    updateCurrentPatch();
    // fetchPatchData(this.props.updateCurrentPatch);
    fetchData(updateCards);
    getActiveUser((authenticated, data) => console.log(this.props.updateActiveUser({authenticated, ...data})));
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
    const {authenticated, activeUser, children, location, playerClass, cards, patch} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname}
                  activeUser={activeUser}
                  playerClass={playerClass}
                  handleLogout={(e)=>signOut(e)}/>
          {React.cloneElement(children, {
            authenticated,
            activeUser,
            cards,
            patch,
            location
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
  const {cards} = state.cards;
  const {patch} = state.patch;
  const {activeUser} = state.users;
  const {playerClass} = state.deckCreation;
  const {authenticated} = activeUser;
  return {cards, patch, authenticated, activeUser, playerClass};
};

const mapDispatchToProps = (dispatch) => {

  return {
    updateCurrentPatch: () => dispatch({type: FETCH_PATCH_REQUEST}),
    updateCards: (cards) => dispatch({
      type: 'UPDATE_CARDS', cards
    }),
    updateActiveUser: (activeUser) => dispatch({
      type: 'UPDATE_ACTIVE_USER', payload: activeUser
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);