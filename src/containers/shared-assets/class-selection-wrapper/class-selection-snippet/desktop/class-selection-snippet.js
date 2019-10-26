import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectWrapper from '../../selection/select-wrapper';
import Separator from '../../separator/separator';
import DeckImport from '../../deck-import/deck-import';
import { updatePlayerClass } from '../../../../../redux/create-deck/actions/create-deck.action';
import './styles/class-selection-snippet-styles.css';
import './styles/class-selection-snippet-styles-mobile.css';

class ClassSelectionSnippet extends Component {
  render() {
    return (
      <div className="container__page container__page--oneSided create-deck-selection create-deck">
        <SelectWrapper />
        <Separator />
        <DeckImport />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePlayerClass: playerClass => dispatch(updatePlayerClass(playerClass)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ClassSelectionSnippet);
