import React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from "react-router-dom";

const Continue = ({deckMode, playerClass, history}) => {
  console.log(history);
  return (
    <div className={!deckMode || !playerClass ? "not-allowed" : undefined}>
      <h4>
        <span>3</span>
        Start Creating!
      </h4>
      {deckMode && playerClass
        ? (
          <Link className="redirect" to={`${history.location.pathname}/${playerClass}`}>
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

export default withRouter(connect(mapStateToProps)(Continue));