import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import {getCurrentUserInfo, logout} from '../server/user';
import 'antd/lib/tooltip/style/css';
import 'antd/lib/dropdown/style/css';
import {fetchData, fetchPatchData} from '../data/cards-data';
import {connect} from 'react-redux';

class Main extends Component{
  constructor(props) {
    super(props);
    getCurrentUserInfo(props.updateActiveUser);
  };

  componentDidMount() {
    fetchPatchData(this.props.updateCurrentPatch);
    fetchData(this.props.updateCards);
  }


  render(){
    const {authenticated, activeUser, children, location, cards, patch} = this.props;
    return (
        <div id="container">
          <Navbar url={location.pathname} user={this.props.activeUser} handleLogout={(e)=>logout(e)}/>
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