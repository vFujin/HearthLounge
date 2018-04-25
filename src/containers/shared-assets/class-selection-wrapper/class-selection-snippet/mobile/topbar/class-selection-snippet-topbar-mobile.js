import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './topbar-mobile-styles.css';

const ClassSelectionSnippetTopbarMobile = ({type, handleCreationTypeChange}) => (
  <div className="subTopbar__mobile">
    <div id="fromScratch"
         className={type === "fromScratch" ? "active" : undefined}
         onClick={handleCreationTypeChange}>Create Deck From Scratch
    </div>
    <div id="import"
         className={type === "import" ? "active" : undefined}
         onClick={handleCreationTypeChange}>Import Deck
    </div>
  </div>
);

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

ClassSelectionSnippetTopbarMobile.propTypes = {
  type: PropTypes.string.isRequired,
  handleCreationTypeChange: PropTypes.func.isRequired
};

ClassSelectionSnippetTopbarMobile.defaultProps = {
  type: "fromScratch"
};

export default connect(mapStateToProps)(ClassSelectionSnippetTopbarMobile);