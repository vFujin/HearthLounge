import React, {Component} from 'react';
import { connect } from "react-redux";
import DeckDetails from "./deck-details";
import Background from "./background";
import _ from "lodash";
import Select from "antd/lib/select/index";
import {deckBroaden, deckSimplification} from "../../../../../../utils/deck/edit-mode";
import {updateActiveDeckCopy} from "../../../../../../redux/deck/active-deck-copy/actions";

class SidebarBody extends Component {

  handleCardAddition = (value) => {
    const {cards, deckView} = this.props;
    const {activeDeckCopy} = deckView;
    const deck = deckBroaden(activeDeckCopy, cards);

    let filteredCard = cards.allCards.find(c => c.name === value);
    if (filteredCard) {
      deck.push(filteredCard);

      let simplifiedDeck = deckSimplification(deck);
      updateActiveDeckCopy({deck: simplifiedDeck});
    }
  };

  search = () => {
    const {cards, deckView} = this.props;
    const {activeDeck} = deckView;

    if (!cards.loading) {
      const Option = Select.Option;
      const options = cards.allCards
        .filter(card => (card.type !== "Hero" && card.collectible === true && (card.playerClass === _.startCase(activeDeck.playerClass) || card.playerClass === 'Neutral')))
        .map(card => <Option value={card.name} key={card.name}>{card.name}</Option>);

      return (
        <Select mode="combobox"
                placeholder="Card name..."
                style={{width: '80%'}}
                allowClear={true}
          // disabled={activeDeckCopy.length >= 30}
                showSearch={true}
                onSelect={(v) => this.handleCardAddition(v)}>
          {options}
        </Select>
      )
    }
  };


  render() {
    const {cards, deckView} = this.props;
    const {activeDeck, tools} = deckView;
    const { deckEditView } = tools;
    const { playerClass, loading } = activeDeck;

    return (
      <div className="sidebar__body">
        <DeckDetails allCards={cards}/>
        {deckEditView
          ? (
            <div className="addCard-wrapper">
              {this.search}
              <span>+</span>
            </div>
          )
          : null
        }
        { !loading && <Background playerClass={playerClass}/> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { deckView, cards } = state;
  return { deckView, cards };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarBody);