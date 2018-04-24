import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeckstringInput from "../../pages/create-deck/after-class-selection/right-container/topbar-assets/import-deck";
import {createDeckFromDeckstringObj} from "../../../utils/deck/deckstring/index";
import {
  editDeck,
  simplifyDeck,
  updateImportedDeckstring
} from "../../../redux/create-deck/actions/create-deck.action";

class DeckImport extends Component {

  handleDeckImport = () => {
    const {cards, editDeck, simplifyDeck, deckCreation, updatePlayerClass} = this.props;
    const {importedDeckstring} = deckCreation;
    const {allCards} = cards;

    createDeckFromDeckstringObj(allCards, importedDeckstring, deck => editDeck(deck), simplifiedDeck => simplifyDeck(simplifiedDeck), playerClass => updatePlayerClass(playerClass));
  };

  handleInputChange = e =>{
    const {updateImportedDeckstring} = this.props;
    let value = e.target.value;
    updateImportedDeckstring(value);
  };

  render() {
    return (
      <div className="container__page--inner container__class-selection">
        <h3>Import deck</h3>
        <DeckstringInput handleDeckImport={this.handleDeckImport}
                         handleInputChange={this.handleInputChange}
                         importedDeckstring={this.props.deckCreation.importedDeckstring}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {deckCreation} = state;
  const {cards} = state.cards;

  return {deckCreation, cards}
};

const mapDispatchToProps = dispatch => {
  return {
    simplifyDeck: simplifiedDeck => dispatch(simplifyDeck(simplifiedDeck)),
    editDeck: deck => dispatch(editDeck(deck)),
    updateImportedDeckstring: importedDeckstring => dispatch(updateImportedDeckstring(importedDeckstring)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckImport);