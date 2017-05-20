import React from 'react';

import Topbar from './topbar';
import DeckDescription from './sections/deck-description';
import DeckComments from './sections/deck-comments';

const RightContainer = ({currentDeck}) =>{

  return (
      <div className="container__page--inner container__page--right">
        <Topbar currentDeck={currentDeck}/>

        <div className="content">
          <div className="container__details">
            <DeckDescription currentDeck={currentDeck}/>
            <DeckComments/>
          </div>
        </div>
      </div>
  )
};

export default RightContainer;