import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Select from 'antd/lib/select';
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";

const LeftContainer = ({cards, currentDeck, editingDecklist, deckEditing, handleCardRemovalClick, updateDecklist}) =>{

  const handleCardAddition = (value) => {
    let filteredCard = cards.allCards.find(card => card.name === value);
    let editingDecklistCards = editingDecklist.cards;
    // console.log(Object.entries(editingDecklistCards).filter(k => k[0] === filteredCard.name));
    let manaCurve = editingDecklist.manaCurve;

    let decklistAfterCardAddition = Object.keys(editingDecklistCards).reduce((result, card) => {
      if(card !== filteredCard.name){
        result = Object.assign(editingDecklistCards, {
          [filteredCard.name]: {
            amount: 1,
            cost: filteredCard.cost,
            type: filteredCard.type
          }
        });
      }

      if (card === filteredCard.name) {
        console.log("before, ",card, result[card].amount)
        result[card].amount = 2;
        console.log("after, ",card, result[card].amount)
      }

    }, editingDecklistCards);

    let manacurveAfterCostAddition =  manaCurve.map((c, i) => {
      //edge case for 7+ cost cards
      return Object.entries(editingDecklistCards).filter(k => k[0] === filteredCard.name).map(card => {
        if ((i == filteredCard.cost) && !(card[1].amount >= 2)) {
          return Number(c) + 1;
        }
        return c;
      })[0];
    });

    let max = _.max(manacurveAfterCostAddition);

    updateDecklist({
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
          .filter(card => (card.type !== "Hero" && card.collectible === true && (card.playerClass === _.startCase(currentDeck.playerClass) || card.playerClass === 'Neutral')))
          .slice(0, 30)
          .map(card => <Option value={card.name} key={card.name}>{card.name}</Option>);
      return (
          <Select mode="combobox"
                  placeholder="Card name..."
                  style={{width: '80%'}}
                  allowClear={true}
                  disabled={_.map(editingDecklist.card).length >= 30}
                  showSearch={true}
                  onSelect={(v)=>handleCardAddition(v)}>
            {options}
          </Select>
      )
    }
    return "foo"
  };


  return(
      <div className={`container__page--inner container__page--left ${deckEditing ? 'edit-mode' : ''}`}>
        <SidebarHeader currentDeck={currentDeck}/>
        <SidebarBody currentDeck={currentDeck}
                     allCards={cards.allCards}
                     deckEditing={deckEditing}
                     handleCardRemovalClick={handleCardRemovalClick}
                     search={search}
                     editingDecklist={editingDecklist}/>
      </div>
  )
};

export default LeftContainer;

LeftContainer.propTypes = {
  currentDeck: PropTypes.shape({
    archetype: PropTypes.string,
    author: PropTypes.string,
    created: PropTypes.number,
    deck: PropTypes.shape({
      cards: PropTypes.object,
      manaCurve: PropTypes.array,
      types: PropTypes.object,
    }),
    deckId: PropTypes.string,
    description: PropTypes.string,
    playerClass: PropTypes.string,
    patch: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    views: PropTypes.number,
    upvotes: PropTypes.number,
    downvotes: PropTypes.number,
  })
};