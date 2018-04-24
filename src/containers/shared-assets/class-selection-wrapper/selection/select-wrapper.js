import React from 'react';
import { connect } from "react-redux";
import SelectClass from './select-class';
import SelectMode from './select-mode';
import {Link} from "react-router-dom";
import Button from '../../../../components/buttons/button';

const SelectWrapper = ({deckMode, playerClass}) => {
  return (
    <div className="container__page--inner container__selection container__selection--wrapper">
      <h3>Create deck from scratch</h3>
      <div>
        <div>
          <h4><span>1</span> Select Mode</h4>
          <SelectMode />
        </div>
        <div>
          <h4><span>2</span> Select Class</h4>
          <SelectClass />
        </div>
      </div>

      <Link to={`/create-deck/${playerClass}`}>
        <Button text="Continue"/>
      </Link>
    </div>
  )
};

const mapStateToProps = state => {
  const { deckMode } = state.deckDetails;
  const { playerClass } = state.deckCreation;
  return { deckMode, playerClass };
};

export default connect(mapStateToProps)(SelectWrapper);