import React from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import Select from "antd/lib/select/index";
import {decklistAddCard} from "../../../utils/deck/edit-mode/decklist-add-card";
import {updateActiveDeckCopy} from "../../../redux/deck/active-deck-copy/actions";

const CardDecklistSearch = ({cards, activeDeckCopy, updateActiveDeckCopy}) => {
  const {loading} = cards;

  if (!loading) {
    const Option = Select.Option;
    const modeCards = activeDeckCopy.mode === "standard" ? "standardCards" : "allCards";
    const options = cards[modeCards]
      .filter(card => (card.type !== "Hero" && card.collectible === true && (card.playerClass === _.startCase(activeDeckCopy.playerClass) || card.playerClass === 'Neutral')))
      .map(card => <Option value={card.name} key={card.name}>{card.name}</Option>);

    return (
      <Select mode="combobox"
              placeholder="Card name..."
              style={{width: '80%'}}
              allowClear={true}
        // disabled={activeDeckCopy.length >= 30}
              showSearch={true}
              onSelect={(card) => decklistAddCard(card, cards, activeDeckCopy, updatedDeck => updateActiveDeckCopy(updatedDeck))}>
        {options}
      </Select>
    )
  }
};

const mapStateToProps = state => {
  const { cards } = state.cards;
  const {activeDeckCopy} = state.deckView;
  return { cards, activeDeckCopy };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveDeckCopy: payload => dispatch(updateActiveDeckCopy(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDecklistSearch);