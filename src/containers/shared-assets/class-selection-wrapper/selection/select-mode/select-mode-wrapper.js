import React from 'react';
import { connect } from "react-redux";
import SelectMode from './select-mode';

const SelectModeWrapper = ({deckMode}) => {
  return (
    <div className="container__selection--modeWrapper">
      <h4 className={deckMode ? "success" : undefined}>
        <span>{deckMode ? "✔" : 1}</span>
        Select Mode
      </h4>
      <SelectMode />
    </div>
  )
};

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  return { deckMode };
};

export default connect(mapStateToProps)(SelectModeWrapper);