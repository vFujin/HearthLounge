import React from 'react';
import { connect } from "react-redux";
import Content from "./content";
import Topbar from "./topbar";
import Loader from "../loaders/diamond/loader";
import AddCardWrapper from "./add-card-wrapper/add-card-wrapper";
import './styles/decklist-sidebar-styles.css';
import './styles/decklist-sidebar-mobile-styles.css';

const DecklistSidebar = ({activeDeck, deck, deckEditView, inDeckCreation, deckLength, showCardAdditionBox = false}) => {
  const {loading} = activeDeck;

  return (loading && !inDeckCreation)
    ? <Loader theme="light"/>
    : (
      <div className={
        `decklistSidebar
        ${deckEditView ? "decklistSidebar__editing" : undefined}
        ${inDeckCreation ? "decklistSidebar__inDeckCreation" : undefined}`
      }>
        <Topbar deckEditView={deckEditView}/>
        <Content deck={deck || []} inDeckCreation={inDeckCreation}/>
        {deckEditView && showCardAdditionBox && <AddCardWrapper disabled={deckLength >= 30}/>}
      </div>
    )
};

const mapStateToProps = state => {
  const { activeDeck, tools } = state.deckView;
  const { deckEditView } = tools;
  return { activeDeck, deckEditView };
};

export default connect(mapStateToProps)(DecklistSidebar);