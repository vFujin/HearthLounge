import React from 'react';
import { connect } from "react-redux";
import MapFunctionlessIcons from "../right-container/topbar-assets/map-functionless-icons";
import Decklength from "../right-container/topbar-assets/decklength";

const CreateDeckStatsMobile = ({deck, playerClass}) => {
  return (
    <div className="createDeck__mobile--stats">
      <MapFunctionlessIcons deck={deck} playerClass={playerClass} set="types" />
      <Decklength deck={deck}/>
    </div>
  )
};

const mapStateToProps = state => {
  const {deck, playerClass} = state.deckCreation;
  return {deck, playerClass}
};

export default connect(mapStateToProps)(CreateDeckStatsMobile);