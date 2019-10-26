import React from 'react';
import PropTypes from 'prop-types';
import ProceedBtn from './proceed-btn';
import SelectModeWrapper from '../../../selection/select-mode/select-mode-wrapper';
import SelectClassWrapper from '../../../selection/select-class/select-class-wrapper';

const CreateDeckFromScratchMobile = ({ stage, handleStageChange }) => {
  const activeStage = stage => {
    switch (stage) {
      case 2:
        return <SelectClassWrapper />;
      default:
        return <SelectModeWrapper />;
    }
  };

  return (
    <div className="content active-stage container__selection">
      {activeStage(stage)}
      <div className="buttons">
        <ProceedBtn
          type="backward"
          stage={stage}
          handleStageChange={handleStageChange}
        />
        <ProceedBtn
          type="forward"
          stage={stage}
          handleStageChange={handleStageChange}
        />
      </div>
    </div>
  );
};

CreateDeckFromScratchMobile.propTypes = {
  stage: PropTypes.number.isRequired,
  handleStageChange: PropTypes.func.isRequired,
};

CreateDeckFromScratchMobile.defaultProps = {
  stage: 1,
};

export default CreateDeckFromScratchMobile;
