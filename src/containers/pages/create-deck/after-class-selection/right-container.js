import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';

const RightContainer = ({deck, filtersView, handleDeckSaving, cards, activeClass, query, visible, user}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query}
                activeClass={activeClass}
                deck={deck}
                handleDeckSaving={handleDeckSaving}/>
        <div className="content">
          <Cards cards={cards} visible={visible}/>
          <DeckOptions visible={visible} activeClass={activeClass} deck={deck} user={user}/>
        </div>
      </div>
  )
};

export default RightContainer;