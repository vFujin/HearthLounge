import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import ChoosenCards from './sidebar/details/choosen-cards';
import DeckMechanics from './sidebar/details/deck-mechanics';
import MapFunctionlessIcons from '../right-container/topbar-assets/map-functionless-icons';
import ManaCurve from "../../../../../components/mana-curve/mana-curve";
import Icon from "../../../../../components/icon";
import Button from "../../../../../components/buttons/button";
import {toggleDeckMechanics} from "../../../../../redux/create-deck/actions/create-deck.action";

class DeckSidebar extends Component {

  handleDeckMechanicsToggle = () => {
    const {toggleDeckMechanics, deckCreation} = this.props;
    const {deckMechanics} = deckCreation;
    toggleDeckMechanics(!deckMechanics);
  };

  decklistHeaderView = () => {
    const {deck, imgReadyDecklist} = this.props.deckCreation;
    return imgReadyDecklist
        ? <MapFunctionlessIcons deck={deck} activeClass="decklist-summary" set="types"/>
        : <Button handleClick={this.handleDeckMechanicsToggle} text="Deck Mechanics" type="default--active" />
  };

  render() {
    const {playerClass, cards, deckCreation} = this.props;
    const {deck, deckMechanics} = deckCreation;
    let countByCost = _.countBy(deck, (value)=>value.cost < 7 ? value.cost : 7);
    let max = _.max(Object.values(countByCost));

    return (
      <div className="sidebar__body">
        <div className="container__mana-curve" id="decklist-to-img">
          <h3>Cards/Mana Cost</h3>
          <ManaCurve deck={deck} max={max} padding="1vh 0" barHeight="70%" barColor={playerClass}/>

          <h3>Chosen Cards{this.decklistHeaderView()}</h3>
          {
            !deckMechanics
              ? <ChoosenCards deck={deck}/>
              : <DeckMechanics deck={deck} cards={cards}/>
          }
        </div>
        <div className="background">
          <Icon name={playerClass} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  const {deckCreation} = state;
  const {cards} = state.cards;

  return {deckCreation, cards};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDeckMechanics: deckMechanics => dispatch(toggleDeckMechanics(deckMechanics)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckSidebar);

