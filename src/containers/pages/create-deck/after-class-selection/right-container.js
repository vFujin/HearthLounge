import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';
import Search from "./right-container/content-assets/cards/search";

const RightContainer = ({authenticated, deck, deckstring, importedDeckstring, udpateCardSearchValue, importedDeckstringPopover, patch, filteredCards, cardSearchValue, filtersView, handleCardClick, handleCardSearch, handleOptionsClick, handleInputChange, handleImgSaveClick, handleDeckImport, allCards, playerClass,
                          query, simplifiedDeck, filtersQuery, editingTool, user, searchBox, imgReadyDecklist, updateCurrentCardsLoaded, currentCardsLoaded}) =>{
  const activeView = () => {
    return !editingTool
        ? <Cards allCards={allCards}
                 deck={deck}
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
      return <Search cards={allCards}
                     cardSearchValue={cardSearchValue}
                     handleInputChange={handleInputChange}/>
    }
  };

  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query}
                playerClass={playerClass}
                deck={deck}
                importedDeckstring={importedDeckstring}
                importedDeckstringPopover={importedDeckstringPopover}
                deckstring={deckstring}
                handleInputChange={handleInputChange}
                handleImgSaveClick={handleImgSaveClick}
                handleOptionsClick={handleOptionsClick}
                handleDeckImport={handleDeckImport}
                imgReadyDecklist={imgReadyDecklist}/>
        <div className="content scrollable">
          {activeView()}
        </div>
        {searchBoxView()}
      </div>
  )
};

export default RightContainer;