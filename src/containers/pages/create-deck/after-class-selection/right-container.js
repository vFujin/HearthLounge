import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';

const RightContainer = ({authenticated, deck, deckstring, patch, filtersView, handleCardClick, handleOptionsClick, handleImgSaveClick, toggleCardAmountTooltip, allCards, activeClass, query, simplifiedDeck, editingTool, user, imgReadyDecklist}) =>{

  const currentView = () => {
    return !editingTool
        ? <Cards allCards={allCards}
                 deck={deck}
                 playerClass={activeClass}
                 handleCardClick={handleCardClick}
                 toggleCardAmountTooltip={toggleCardAmountTooltip}/>
        : <DeckOptions activeClass={activeClass}
                       simplifiedDeck={simplifiedDeck}
                       patch={patch}
                       deckstring={deckstring}
                       authenticated={authenticated}
                       user={user}/>
  };


  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query}
                activeClass={activeClass}
                deck={deck}
                deckstring={deckstring}
                handleImgSaveClick={handleImgSaveClick}
                handleOptionsClick={handleOptionsClick}
                imgReadyDecklist={imgReadyDecklist}/>
        <div className="content">
          {currentView()}
        </div>
      </div>
  )
};

export default RightContainer;