import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {default as Cards} from '../../../../../components/cards/cards';
import _ from "lodash";
import DeckOptions from "../right-container/content-assets/deck-description/deck-options";
import DeckSidebar from '../left-container/deck-sidebar';
import {
  changeActiveCreateDeckMobileTab, editDeck,
  toggleDeckMechanics
} from "../../../../../redux/create-deck/actions/create-deck.action";
import CreateDeckTopbarMobile from "./topbar/create-deck-topbar-mobile";
import {updateDeck} from "../right-container/content-assets/utils";

class CreateDeckClassSelectedMobile extends Component {

  componentDidMount(){
    const {playerClass} = this.props;
    document.title = `Deck Creation - ${_.startCase(playerClass)}`;
  }

  componentWillUnmount() {
    const {toggleDeckMechanics} = this.props;
    toggleDeckMechanics(false);
  }

  handleTabClick = (e) => {
    const tab = e.currentTarget.id;
    this.props.changeActiveCreateDeckMobileTab(tab);
  };

  handleCardClick = (e, card) => {
    const {deck, editDeck} = this.props;
    e.preventDefault();
    updateDeck(e, card, deck, editDeck);
  };

  content = () => {
    const {activeCreateDeckMobileTab, deck, playerClass} = this.props;
    switch(activeCreateDeckMobileTab){
      case "deckList": return <DeckSidebar playerClass={playerClass}/>;
      case "deckDetails": return <DeckOptions playerClass={playerClass}/>;
      default: return <Cards inDeckCreation
                             mode="standard"
                             playerClass={_.startCase(playerClass)}
                             deck={deck}
                             handleCardClick={this.handleCardClick}/>;
    }
  };

  render() {
    const {activeCreateDeckMobileTab} = this.props;

    const containerClassName = activeCreateDeckMobileTab === "deckList" ? "left" : "right";

    return (
      <div className="container__page create-deck">
        <CreateDeckTopbarMobile handleTabClick={this.handleTabClick}/>
        <div className={`container__page--inner container__page--${containerClassName}`}>
         <div className="content">
            {this.content()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {deck, activeCreateDeckMobileTab} = state.deckCreation;
  return {deck, activeCreateDeckMobileTab};
};

const mapDispatchToProps = dispatch => {
  return {
    editDeck: deck => dispatch(editDeck(deck)),
    toggleDeckMechanics: deckMechanics => dispatch(toggleDeckMechanics(deckMechanics)),
    changeActiveCreateDeckMobileTab: tab => dispatch(changeActiveCreateDeckMobileTab(tab))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckClassSelectedMobile);

CreateDeckClassSelectedMobile.propTypes = {
  playerClass: PropTypes.string.isRequired
};
