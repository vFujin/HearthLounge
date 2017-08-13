import React from 'react';
import SidebarHeader from './left-container/sidebar/sidebar-header';
import DeckSidebar from './left-container/deck-sidebar';
import FilterSidebar from './left-container/filter-sidebar';

const LeftContainer = ({handleSidebarViewChange, filtersView, countCards, deck, deckDetails, handleDeckMechanicsToggle, playerClass,
                          cards, query, imgReadyDecklist}) =>{
  const {allCards, name, faction, race, mechanics, type, cardSet} = cards;

  const activeView = () => {
    if(!filtersView){
      return <DeckSidebar countCards={countCards}
                          deck={deck}
                          deckDetails={deckDetails}
                          handleDeckMechanicsToggle={handleDeckMechanicsToggle}
                          imgReadyDecklist={imgReadyDecklist}
                          mechanics={mechanics}
                          playerClass={playerClass}/>
    } else {
      return <FilterSidebar name={name}
                            race={race}
                            mechanics={mechanics}
                            type={type}
                            faction={faction}
                            cards={allCards}
                            cardSet={cardSet}
                            query={query}/>
    }
  };

  return (
      <div className="container__page--inner container__page--left">
        <SidebarHeader filtersView={filtersView}
                       handleSidebarViewChange={handleSidebarViewChange}/>
        {activeView()}
      </div>
  )
};

export default LeftContainer;