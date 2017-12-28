import React from 'react';
import _ from 'lodash';
import Topbar from './right-container/topbar';
import {default as Cards} from '../../../../components/cards/cards';
import DeckOptions from './right-container/content-assets/deck-description/deck-options';
import Search from "./right-container/content-assets/cards/search";

const RightContainer = ({cards, deck, filteredCards, cardSearchValue, handleCardClick, handleInputChange, playerClass,
                          query, filtersQuery, editingTool, searchBox, updateCurrentCardsLoaded, currentCardsLoaded}) =>{

  const activeView = () => {
    return !editingTool
        ? <Cards inDeckCreation
                 mode="standard"
                 playerClass={_.startCase(playerClass)}
                 deck={deck}
                 handleCardClick={handleCardClick}/>
        : <DeckOptions playerClass={playerClass}/>
  };

  const searchBoxView = () =>{
    if(searchBox){
      return <Search cards={filteredCards || cards.allCards.filter(card => (card.playerClass === 'Neutral') || card.playerClass === _.startCase(playerClass))}
                     cardSearchValue={cardSearchValue}
                     handleInputChange={handleInputChange}/>
    }
  };

  return (
      <div className="container__page--inner container__page--right">
        <Topbar query={query}
                playerClass={playerClass}
                deck={deck}
                handleInputChange={handleInputChange}/>
        <div className="content scrollable">
          {activeView()}
        </div>
        {searchBoxView()}
      </div>
  )
};

export default RightContainer;