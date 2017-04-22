import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import DeckOptions from './right-container/content-assets/deck-description/deck-options';

const RightContainer = ({deck, filtersView, handleDeckSaving, cards, params, query, visible}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query} params={params}
                deck={deck}
                handleDeckSaving={handleDeckSaving}/>
        <div className="content">
          <Cards cards={cards} visible={visible}/>
          <DeckOptions visible={visible} params={params} deck={deck}/>
        </div>
      </div>
  )
};

export default RightContainer;