import React, { Component } from 'react';
import { connect } from 'react-redux';
import './topbar-mobile-styles.css';

class ClassSelectionSnippetTopbarMobile extends Component {

  state = {
    type: "fromScratch"
  };

  handleCreationTypeChange = e => {
    const type = e.currentTarget.id;
    this.setState({type})
  };

  render() {
    const {type} = this.state;
    return (
      <div className="subTopbar__mobile">
        <div id="fromScratch"
             className={type === "fromScratch" ? "active" : undefined}
             onClick={this.handleCreationTypeChange}>Create Deck From Scratch</div>
        <div id="import"
             className={type === "import" ? "active" : undefined}
             onClick={this.handleCreationTypeChange}>Import Deck</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

ClassSelectionSnippetTopbarMobile.propTypes = {};
ClassSelectionSnippetTopbarMobile.defaultProps = {};

export default connect(mapStateToProps)(ClassSelectionSnippetTopbarMobile);