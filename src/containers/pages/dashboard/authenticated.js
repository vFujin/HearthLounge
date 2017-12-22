import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar'
import Content from './right-container/content';
import {fetchActiveUserDecksRequest} from "../../../redux/user/active-user-dashboard-decks/actions";
import {fetchShortenedUserDetailsRequest} from "../../../redux/user/shortened-details/actions";

class Authenticated extends Component{

  handleUserDecksClick = () =>{
    this.props.fetchDecks(this.props.activeUser.uid);
  };

  render() {
    return (
      <div className="container__page container__page--twoSided dashboard">
        <Sidebar/>
        <div className="container__page--inner container__page--right">
          <Topbar handleUserDecksClick={this.handleUserDecksClick}/>
          <Content/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  const {activeUser} = state.users;
  return {activeUser}
};

const mapDispatchToProps = dispatch => {
  return{
    fetchDecks: payload => dispatch(fetchActiveUserDecksRequest(payload)),
    fetchUsers: () => dispatch(fetchShortenedUserDetailsRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated);