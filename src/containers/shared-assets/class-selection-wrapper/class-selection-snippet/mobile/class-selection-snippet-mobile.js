import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassSelectionSnippetTopbarMobile from './class-selection-snippet-topbar-mobile';
import ProceedBtn from "./proceed-btn";
import './class-selection-snippet-mobile-styles.css';

class ClassSelectionSnippetMobile extends Component {

  state = {
    stage: 1
  };

  handleStageChange = e => {
    const stage = e.currentTarget.id;
    this.setState({stage})
  };

  render() {
    const {stage} = this.state;
    return (
      <div className="container__page create-deck-selection-mobile create-deck">
        <div className="container__page--inner">
          <ClassSelectionSnippetTopbarMobile />
          <div className="content">
            <div className="buttons">
              <ProceedBtn type="forward" stage={stage}/>
              <ProceedBtn type="backward" stage={stage}/>
            </div>
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