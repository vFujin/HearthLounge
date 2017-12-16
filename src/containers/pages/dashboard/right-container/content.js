import React from 'react';
import {connect} from "react-redux";
import Decks from "./assets/decks";

const Content = ({activeUserDecks}) =>{
  return (
      <div className="content">
        <Decks activeUserDecks={activeUserDecks}/>
        <div className="deck-comments"></div>
      </div>
  )
};
const mapStateToProps = state =>{
  const {activeUserDecks} = state.users;
  return {activeUserDecks}
};


export default connect(mapStateToProps, null)(Content);