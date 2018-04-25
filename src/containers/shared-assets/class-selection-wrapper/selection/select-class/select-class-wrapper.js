import React from 'react';
import { connect } from "react-redux";
import SelectClass from './select-class';

const SelectClassWrapper = ({playerClass}) => {
  return (
    <div className="container__selection--classWrapper">
      <h4 className={playerClass ? "success" : undefined}>
        <span>{playerClass ? "✔" : 2}</span>
        Select Class
      </h4>
      <SelectClass />
    </div>
  )
};

const mapStateToProps = state => {
  const { playerClass } = state.deckDetails;
  return { playerClass };
};

export default connect(mapStateToProps)(SelectClassWrapper);