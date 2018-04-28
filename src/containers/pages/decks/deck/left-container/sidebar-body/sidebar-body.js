import React from 'react';
import { connect } from "react-redux";
import DeckDetails from "./deck-details";
import Background from "./background";
import AddCardWrapper from "./add-card-wrapper";

const SidebarBody = ({deckView}) => {
  const {activeDeck, activeDeckCopy, tools} = deckView;
  const {deckEditView} = tools;
  const {playerClass, loading} = activeDeck;

  return (
    <div className="sidebar__body">
      <DeckDetails/>
      {deckEditView && <AddCardWrapper activeDeckCopy={activeDeckCopy}/>}
      {!loading && <Background playerClass={playerClass}/>}
    </div>
  )
};

const mapStateToProps = state => {
  const { deckView } = state;
  return { deckView };
};

export default connect(mapStateToProps)(SidebarBody);