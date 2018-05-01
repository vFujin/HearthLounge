import React from 'react';
import { connect } from "react-redux";
import DeckDetails from "./deck-details";
import Background from "./background";

const SidebarBody = ({deckView}) => {
  const {activeDeck} = deckView;
  const {playerClass, loading} = activeDeck;

  return (
    <div className="sidebar__body">
      <DeckDetails/>
      {!loading && <Background playerClass={playerClass}/>}
    </div>
  )
};

const mapStateToProps = state => {
  const { deckView } = state;
  return { deckView };
};

export default connect(mapStateToProps)(SidebarBody);