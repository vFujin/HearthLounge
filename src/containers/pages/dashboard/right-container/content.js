import React from 'react';
import {connect} from "react-redux";
import Decks from "./assets/decks";
import Users from "./assets/users";

const Content = ({activeUserDecks, allUsers}) =>{
  return (
      <div className="content">
        <Decks activeUserDecks={activeUserDecks}/>
        <Users allUsers={allUsers}/>
      </div>
  )
};
const mapStateToProps = state =>{
  const {activeUserDecks, allUsers} = state.users;
  return {activeUserDecks, allUsers}
};


export default connect(mapStateToProps, null)(Content);