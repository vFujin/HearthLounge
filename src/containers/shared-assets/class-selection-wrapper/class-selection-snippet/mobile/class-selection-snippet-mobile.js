import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassSelectionSnippetTopbarMobile from './topbar/class-selection-snippet-topbar-mobile';

import './class-selection-snippet-mobile-styles.css';
import CreateDeckFromScratchMobile from "./create-from-scratch/create-from-scratch";
import ImportDeckMobile from "./import/import-deck";

class ClassSelectionSnippetMobile extends Component {

  state = {
    stage: 1,
    type: "fromScratch"
  };

  handleCreationTypeChange = e => {
    const type = e.currentTarget.id;
    this.setState({type})
  };

  handleStageChange = e => {
    const stage = +e.currentTarget.id;
    this.setState({stage})
  };

  render() {
    const {stage, type} = this.state;

    return (
      <div className="container__page create-deck-selection-mobile create-deck">
        <ClassSelectionSnippetTopbarMobile type={type}
                                           handleCreationTypeChange={this.handleCreationTypeChange}/>
        {
          type === "fromScratch"
          ? <CreateDeckFromScratchMobile stage={stage} handleStageChange={this.handleStageChange}/>
          : <ImportDeckMobile />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

export default connect(mapStateToProps)(ClassSelectionSnippetMobile);