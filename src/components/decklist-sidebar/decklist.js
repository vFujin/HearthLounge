import React from 'react';
import { connect } from "react-redux";
import Content from "./content";
import Topbar from "./topbar";
import Loader from "../loaders/loader";
import AddCardWrapper from "./add-card-wrapper/add-card-wrapper";
import './styles/decklist-sidebar-styles.css';

const DecklistSidebar = ({activeDeck, deck, deckEditView, inDeckCreation, showCardAdditionBox = false}) => {
  const {loading} = activeDeck;

  return (loading && !inDeckCreation)
    ? <Loader theme="light"/>
    : (
      <div className={`decklistSidebar ${deckEditView ? "decklistSidebar__editing" : undefined}`}>
        <Topbar deckEditView={deckEditView}/>
        <Content deck={deck || []} inDeckCreation={inDeckCreation}/>
        {deckEditView && showCardAdditionBox && <AddCardWrapper />}
      </div>
    )
};

const mapStateToProps = state => {
  const { activeDeck, tools } = state.deckView;
  const { deckEditView } = tools;
  return { activeDeck, deckEditView };
};

export default connect(mapStateToProps)(DecklistSidebar);