import React from 'react';
import Topbar from './topbar';
import Content from './content';

const RightContainer = ({currentDeck}) =>{
  return (
      <div className="container__page--inner container__page--right">
        <Topbar currentDeck={currentDeck}/>
        <Content currentDeck={currentDeck}/>
      </div>
  )
};

export default RightContainer;