import React, {Component} from 'react';
import {connect} from 'react-redux';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar'
import Content from './right-container/content';
import {fetchActiveUserDecksRequest} from "../../../redux/user/active-user-dashboard-decks/actions";
import {fetchAllUsersRequest} from "../../../redux/admin/fetch-all-users/actions";

class Dashboard extends Component{
  componentDidMount(){
    document.title = "Dashboard";
  }

  handleUserDecksClick = () =>{
    this.props.fetchDecks(this.props.activeUser.uid);
  };

  handleFetchAllUsers = () =>{
    if(this.props.activeUser && this.props.activeUser.role < 3) {
      this.props.fetchAllUsers();
    }
  };

  render() {

    return (
      <div className="container__page container__page--twoSided dashboard">
        <Sidebar/>
        <div className="container__page--inner container__page--right">
          <Topbar handleUserDecksClick={this.handleUserDecksClick}
                  handleFetchAllUsers={this.handleFetchAllUsers}/>
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
    fetchAllUsers: () => dispatch(fetchAllUsersRequest())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);