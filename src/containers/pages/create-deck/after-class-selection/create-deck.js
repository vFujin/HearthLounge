import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import LeftContainer from './left-container';
import RightContainer from './right-container';
import {resetFocus} from "./right-container/content-assets/utils/reset-focus";
import {toggleDeckMechanics, toggleImgReadyDecklist, toggleImportedDeckstringPopover} from "../../../../redux/create-deck/actions/create-deck.action";
import './styles/create-deck-styles.css';
import './styles/create-deck-mobile-styles.css';

class CreateDeckClassSelected extends PureComponent {
  componentDidMount(){
    const {playerClass} = this.props;
    document.title = `Deck Creation - ${_.startCase(playerClass)}`;
    resetFocus();
  }

  componentWillUnmount() {
    const {toggleDeckMechanics, toggleImgReadyDecklist, toggleImportedDeckstringPopover} = this.props;
    toggleDeckMechanics(false);
    toggleImgReadyDecklist(false);
    toggleImportedDeckstringPopover(false);
  }

  render() {
    const {playerClass} = this.props;

    return (
        <div className="container__page container__page--twoSided create-deck">
          <LeftContainer playerClass={playerClass}/>
          <RightContainer playerClass={playerClass}/>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {deckMechanics, deck, imgReadyDecklist} = state.deckCreation;
  return {deckMechanics, deck, imgReadyDecklist};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDeckMechanics: deckMechanics => dispatch(toggleDeckMechanics(deckMechanics)),
    toggleImgReadyDecklist: decklist => dispatch(toggleImgReadyDecklist(decklist)),
    toggleImportedDeckstringPopover: deckstring => dispatch(toggleImportedDeckstringPopover(deckstring)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelected);