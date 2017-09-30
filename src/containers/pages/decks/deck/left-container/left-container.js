import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Select from 'antd/lib/select';
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";

const LeftContainer = ({activeDeck, activeDeckCopy, cards, deckEditView, updateActiveDeckCopy, handleCardRemovalClick}) =>{

  const handleCardAddition = (value) => {
    const {cards, manaCurve} = activeDeckCopy;
    let filteredCard = cards.allCards.find(card => card.name === value);
    // console.log(Object.entries(editingDecklistCards).filter(k => k[0] === filteredCard.name));

    let decklistAfterCardAddition = Object.keys(cards).reduce((result, card) => {
      if(card !== filteredCard.name){
        result = Object.assign(cards, {
          [filteredCard.name]: {
            amount: 1,
            cost: filteredCard.cost,
            type: filteredCard.type
          }
        });
      }

      if (card === filteredCard.name) {
        console.log("before, ",card, result[card].amount);
        result[card].amount = 2;
        console.log("after, ",card, result[card].amount)
      }

    }, cards);

    let manacurveAfterCostAddition =  manaCurve.map((c, i) => {
      //edge case for 7+ cost cards
      return Object.entries(cards).filter(k => k[0] === filteredCard.name).map(card => {
        if ((i == filteredCard.cost) && !(card[1].amount >= 2)) {
          return Number(c) + 1;
        }
        return c;
      })[0];
    });

    let max = _.max(manacurveAfterCostAddition);

    updateActiveDeckCopy({
      cards: decklistAfterCardAddition,
      manaCurve: manacurveAfterCostAddition,
      max
      //add type
    });

  };

  const search = () => {
    if(!cards.loading) {
      const Option = Select.Option;
      const options = cards.allCards
          .filter(card => (card.type !== "Hero" && card.collectible === true && (card.playerClass === _.startCase(activeDeck.playerClass) || card.playerClass === 'Neutral')))
          .slice(0, 30)
          .map(card => <Option value={card.name} key={card.name}>{card.name}</Option>);
      return (
          <Select mode="combobox"
                  placeholder="Card name..."
                  style={{width: '80%'}}
                  allowClear={true}
                  disabled={activeDeckCopy.length >= 30}
                  showSearch={true}
                  onSelect={(v)=>handleCardAddition(v)}>
            {options}
          </Select>
      )
    }
    return "foo"
  };

  return(
      <div className={`container__page--inner container__page--left ${deckEditView ? 'edit-mode' : ''}`}>
        <SidebarHeader activeDeck={activeDeck}/>
        <SidebarBody activeDeck={activeDeck}
                     activeDeckCopy={activeDeckCopy}
                     allCards={cards.allCards}
                     deckEditView={deckEditView}
                     handleCardRemovalClick={handleCardRemovalClick}
                     search={search}/>
      </div>
  )
};

export default LeftContainer;

LeftContainer.propTypes = {
  activeDeck: PropTypes.object
};