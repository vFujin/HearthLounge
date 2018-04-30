import React from 'react';
import { connect } from "react-redux";
import Content from "./content";
import Topbar from "./topbar";
import Loader from "../loaders/loader";
import './styles/decklist-sidebar-styles.css';

const DecklistSidebar = ({activeDeck, cards, deckEditView}) => {
  const {loading} = activeDeck;

  return loading
    ? <Loader theme="light"/>
    : (
      <div className="decklistSidebar">
        <Topbar deckEditView={deckEditView}/>
        <Content fetchedDeckCards={cards || []}/>
      </div>
    )
};

const mapStateToProps = state => {
  const { activeDeck, activeDeckCopy, tools } = state.deckView;
  const { cards } = activeDeckCopy;
  const { deckEditView } = tools;
  return { activeDeck, cards, deckEditView };
};

export default connect(mapStateToProps)(DecklistSidebar);