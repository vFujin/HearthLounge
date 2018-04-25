import React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";

const Continue = ({deckMode, playerClass}) => {
  return (
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
  )
};

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

export default connect(mapStateToProps)(Continue);