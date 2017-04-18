import React from 'react';
import Topbar from './right-container/topbar';
import Cards from './right-container/content-assets/cards/cards'
import SaveDeckForm from './right-container/content-assets/deck-description/save-deck-form';

const RightContainer = ({deck, filtersView, handleDeckSaving, cards, params, query, visible}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar filtersView={filtersView}
                query={query} params={params}
                deck={deck}
                handleDeckSaving={handleDeckSaving}/>
        <Cards cards={cards} />
        <SaveDeckForm visible={visible} />

      </div>
  )
};

export default RightContainer;