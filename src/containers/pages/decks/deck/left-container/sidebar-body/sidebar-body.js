import React, {Component} from 'react';
import { connect } from "react-redux";
import DeckDetails from "./deck-details";
import Background from "./background";
import {updateActiveDeckCopy} from "../../../../../../redux/deck/active-deck-copy/actions";
import CardDecklistSearch from "../../../../../../components/cards/assets/card-decklist-search";

class SidebarBody extends Component {

  render() {
    const {cards, deckView} = this.props;
    const {activeDeck, activeDeckCopy, tools} = deckView;
    const { deckEditView } = tools;
    const { playerClass, loading } = activeDeck;

    return (
      <div className="sidebar__body">
        <DeckDetails allCards={cards}/>
        {deckEditView
          ? (
            <div className="addCard-wrapper">
              <CardDecklistSearch deck={activeDeckCopy}/>
              <span>+</span>
            </div>
          )
          : null
        }
        { !loading && <Background playerClass={playerClass}/> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { deckView, cards } = state;
  return { deckView, cards };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBody);