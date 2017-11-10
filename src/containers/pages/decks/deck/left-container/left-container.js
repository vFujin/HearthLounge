import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Select from 'antd/lib/select';
import SidebarHeader from "./sidebar-header/sidebar-header";
import SidebarBody from "./sidebar-body/sidebar-body";
import {deckBroaden, deckSimplification} from "../../../../../utils/deck/index";
const LeftContainer = ({activeDeck, activeDeckCopy, cards, deckEditView, updateActiveDeckCopy, handleCardRemovalClick}) =>{
  const deck = deckBroaden(activeDeckCopy, cards);

  const handleCardAddition = (value) => {
    let filteredCard = cards.allCards.find(c => c.name === value);
    if(filteredCard) {
      deck.push(filteredCard);

      let simplifiedDeck = deckSimplification(deck);
      updateActiveDeckCopy({deck: simplifiedDeck});
    }
  };

  const search = () => {
    if(!cards.loading) {
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
                     allCards={cards}
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