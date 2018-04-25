import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassSelectionSnippetTopbarMobile from './topbar/class-selection-snippet-topbar-mobile';
import ProceedBtn from "./proceed-btn";
import SelectModeWrapper from '../../selection/select-mode/select-mode-wrapper';
import SelectClassWrapper from '../../selection/select-class/select-class-wrapper';
import './class-selection-snippet-mobile-styles.css';

class ClassSelectionSnippetMobile extends Component {

  state = {
    stage: 1
  };

  handleStageChange = e => {
    const stage = +e.currentTarget.id;
    this.setState({stage})
  };

  activeStage = (stage) => {
    switch(stage) {
      case 2: return <SelectClassWrapper />;
      default: return <SelectModeWrapper />;
    }
  };

  render() {
    const {stage} = this.state;

    return (
      <div className="container__page create-deck-selection-mobile create-deck">
        <ClassSelectionSnippetTopbarMobile/>
        <div className="content active-stage container__selection">
          {this.activeStage(stage)}
          <div className="buttons">
            <ProceedBtn type="backward" stage={stage} handleStageChange={this.handleStageChange}/>
            <ProceedBtn type="forward" stage={stage} handleStageChange={this.handleStageChange}/>
          </div>
        </div>
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