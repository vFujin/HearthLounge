import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../components/buttons/button';

const ProceedBtn = ({type, stage}) => {
  if (type === "forward") {
    if (stage !== 3) {
      return <Button text="Continue" id={stage + 1} handleClick={this.handleStageChange}/>
    }
  } else {
    if (stage !== 1) {
      return <Button text="Go back" id={stage - 1} handleClick={this.handleStageChange}/>
    }
  }

  return null;
};

ProceedBtn.propTypes = {
  type: PropTypes.string.isRequired,
  stage: PropTypes.number.isRequired
};
ProceedBtn.defaultProps = {
  stage: 1
};

export default ProceedBtn;