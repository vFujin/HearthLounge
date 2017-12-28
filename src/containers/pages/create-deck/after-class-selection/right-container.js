import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Topbar from './right-container/topbar';
import {default as Cards} from '../../../../components/cards/cards';
import DeckOptions from './right-container/content-assets/deck-description/deck-options';
import {updateDeck} from "./right-container/content-assets/utils";
import {editDeck, updateImportedDeckstring} from "../../../../redux/actions/create-deck/create-deck.action";

class RightContainer extends Component {

  handleInputChange = e =>{
    const {updateImportedDeckstring} = this.props;
    let value = e.currentTarget.dataset.value || e.target.value;
    updateImportedDeckstring(value);
  };

  handleCardClick = (e, card) => {
    const {deck, editDeck} = this.props;
    e.preventDefault();
    updateDeck(e, card, deck, editDeck);
  };

  render() {
    const {deck, editingTool, handleInputChange, playerClass} = this.props;
    return (
      <div className="container__page--inner container__page--right">
        <Topbar playerClass={playerClass}
                deck={deck}
                handleInputChange={handleInputChange}/>
        <div className="content">
          {
            editingTool
              ? <Cards inDeckCreation
                       mode="standard"
                       playerClass={_.startCase(playerClass)}
                       deck={deck}
                       handleCardClick={this.handleCardClick}/>
              : <DeckOptions playerClass={playerClass}/>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  const {deck, editingTool} = state.deckCreation;
  return {deck, editingTool}
};

const mapDispatchToProps = dispatch => {
  return {
    editDeck: deck => dispatch(editDeck(deck)),
    updateImportedDeckstring: importedDeckstring => dispatch(updateImportedDeckstring(importedDeckstring)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RightContainer);