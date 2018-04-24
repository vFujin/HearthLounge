import React, {Component} from 'react';
import {connect} from 'react-redux';
import SelectClass from './select-class';
import SelectMode from './select-mode';
import DeckImport from './deck-import';
import { updatePlayerClass } from "../../../redux/create-deck/actions/create-deck.action";

class ClassSelectionSnippet extends Component{

  render() {
    return (
      <div className={`container__page container__page--oneSided class-selection create-deck`}>
        <div className="container__page--inner container__class-selection">
          <h3>Create deck from scratch</h3>
          <SelectMode />
          <SelectClass />
        </div>
        <div className="separator"><p>or</p></div>
        <DeckImport />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerClass: (playerClass) => (dispatch(updatePlayerClass(playerClass))),
  }
};

export default connect(null, mapDispatchToProps)(ClassSelectionSnippet)