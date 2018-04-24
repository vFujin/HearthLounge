import React from 'react';
import { connect } from "react-redux";
import SelectClass from './select-class';
import SelectMode from './select-mode';
import {Link} from "react-router-dom";

const SelectWrapper = ({deckMode, playerClass}) => {
  return (
    <div className="container__page--inner container__selection container__selection--wrapper">
      <h3>Create deck from scratch</h3>
      <div>
        <div>
          <h4 className={deckMode ? "success" : undefined}>
            <span>{deckMode ? "✔" : 1}</span>
            Select Mode
          </h4>
          <SelectMode />
        </div>
        <div>
          <h4 className={playerClass ? "success" : undefined}>
            <span>{playerClass ? "✔" : 2}</span>
            Select Class
          </h4>
          <SelectClass />
        </div>
        <div className={!deckMode || !playerClass ? "not-allowed" : undefined}>
          <h4>
            <span>3</span>
            Start Creating!
          </h4>
          {deckMode && playerClass
            ? (
              <Link className="redirect" to={`/create-deck/${playerClass}`}>
                <span>❯</span>
              </Link>
            )
            : <div className="redirect">
              <span>❯</span>
            </div>
          }
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

export default connect(mapStateToProps)(SelectWrapper);