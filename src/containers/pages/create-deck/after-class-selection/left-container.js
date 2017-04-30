import React from 'react';
import SidebarHeader from './left-container/sidebar/sidebar-header';
import DeckSidebar from './left-container/deck-sidebar';
import FilterSidebar from './left-container/filter-sidebar';

const LeftContainer = ({handleSidebarViewChange, filtersView, countCards, deck, deckDetails, handleDeckMechanicsToggle, params,
                          mechanics, name, race, type, faction, cards, cardSet, query, imgReadyDecklist}) =>{

  let ifDeck = !filtersView ? 'deck' : "filters";
  let ifFilter = !filtersView ? 'filters' : "deck";

  return (
      <div className="container__page--inner container__page--left">
        <SidebarHeader ifDeck={ifDeck} ifFilter={ifFilter} handleSidebarViewChange={handleSidebarViewChange}/>
        <DeckSidebar filtersView={filtersView}
                     countCards={countCards}
                     deck={deck}
                     deckDetails={deckDetails}
                     handleDeckMechanicsToggle={handleDeckMechanicsToggle}
                     imgReadyDecklist={imgReadyDecklist}
                     mechanics={mechanics}
                     params={params}/>

        <FilterSidebar filtersView={filtersView}
                       name={name}
                       race={race}
                       mechanics={mechanics}
                       type={type}
                       faction={faction}
                       cards={cards}
                       cardSet={cardSet}
                       query={query}/>
      </div>
  )
};

export default LeftContainer;