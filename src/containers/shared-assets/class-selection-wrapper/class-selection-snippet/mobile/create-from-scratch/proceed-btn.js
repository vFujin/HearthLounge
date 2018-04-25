import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Button from '../../../../../../components/buttons/button';
import {Link} from "react-router-dom";

const ProceedBtn = ({type, stage, deckMode, playerClass, handleStageChange}) => {
  if (type === "forward") {

    if (deckMode && playerClass && stage === 2) {
      return (
        <Link className="redirect" to={`/create-deck/${playerClass}`}>
          <Button text="Continue"/>
        </Link>
      )
    }
    if (stage !== 3) {
      return <Button text="Continue" id={+stage + 1} handleClick={handleStageChange}/>
    }

  } else {
    if (stage !== 1) {
      return <Button text="Go back" id={+stage - 1} handleClick={handleStageChange}/>
    }
  }

  return null;
};

ProceedBtn.propTypes = {
  type: PropTypes.string.isRequired,
  stage: PropTypes.number.isRequired,
  handleStageChange: PropTypes.func.isRequired
};
ProceedBtn.defaultProps = {
  stage: 1
};

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

export default connect(mapStateToProps)(ProceedBtn);