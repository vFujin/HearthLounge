import React from 'react';
import _ from 'lodash';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';
import Search from "./right-container/content-assets/cards/search";

const RightContainer = ({cards, authenticated, deck, deckstring, udpateCardSearchValue, patch, filteredCards, cardSearchValue, handleCardClick, handleCardSearch, handleInputChange, playerClass,
                          query, simplifiedDeck, filtersQuery, editingTool, user, searchBox, imgReadyDecklist, updateCurrentCardsLoaded, currentCardsLoaded}) =>{


  const activeView = () => {
    return !editingTool
        ? <Cards cards={cards}
                 deck={deck}
                 filteredCards={filteredCards}
                 playerClass={playerClass}
                 handleCardClick={handleCardClick}
                 updateCurrentCardsLoaded={updateCurrentCardsLoaded}
                 filtersQuery={filtersQuery}
                 currentCardsLoaded={currentCardsLoaded}/>
        : <DeckOptions playerClass={playerClass}
                       simplifiedDeck={simplifiedDeck}
                       patch={patch}
                       deckstring={deckstring}
                       authenticated={authenticated}
                       user={user}/>
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