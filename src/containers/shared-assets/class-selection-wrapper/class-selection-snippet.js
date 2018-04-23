import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {icon_filters} from '../../../globals/filters';
import Icon from "../../../components/icon";
import DeckstringInput from "../../pages/create-deck/after-class-selection/right-container/topbar-assets/import-deck";
import {createDeckFromDeckstringObj} from "../../../utils/deck/deckstring";
import {
  editDeck,
  simplifyDeck,
  updateImportedDeckstring,
  updatePlayerClass
} from "../../../redux/create-deck/actions/create-deck.action";

class ClassSelectionSnippet extends Component{

  handleClassSelection = (e) =>{
    const {updatePlayerClass} = this.props;
    let playerClass = e.currentTarget.id;
    updatePlayerClass(playerClass)
  };

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

  listClasses = () =>{
    const {page} = this.props;

    return (
        icon_filters.playerClass.filter(playerClass=> playerClass.url !== "neutral").map(playerClass =>
            <li key={playerClass.url}
                className={playerClass.url}
                id={playerClass.url}
                onClick={this.handleClassSelection}>
              <Link to={`/${page}/${playerClass.url}`}>
                <Icon name={playerClass.url} />
                <p>{playerClass.name}</p>
              </Link>
            </li>
        )
    )
  };

  render() {
    return (
      <div className={`container__page container__page--oneSided class-selection create-deck`}>
        <div className="container__page--inner container__class-selection">
          <h3>Create deck from scratch</h3>
          <ul>
            {this.listClasses()}
          </ul>
        </div>
        <div className="separator"><p>or</p></div>
        <div className="container__page--inner container__class-selection">
          <h3>Import deck</h3>
          <DeckstringInput handleDeckImport={this.handleDeckImport} handleInputChange={this.handleInputChange} importedDeckstring={this.props.deckCreation.importedDeckstring}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {deckCreation} = state;
  const {cards} = state.cards;

  return {deckCreation, cards}
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerClass: (playerClass) => (dispatch(updatePlayerClass(playerClass))),
    simplifyDeck: simplifiedDeck => dispatch(simplifyDeck(simplifiedDeck)),
    editDeck: deck => dispatch(editDeck(deck)),
    updateImportedDeckstring: importedDeckstring => dispatch(updateImportedDeckstring(importedDeckstring)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassSelectionSnippet)