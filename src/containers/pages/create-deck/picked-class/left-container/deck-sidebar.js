import React from 'react';
import DeckGraph from './sidebar/deck-graph';
import ChoosenCards from './sidebar/choosen-cards';

const DeckSidebar = props => {

  const drawBars = () => {
    return props.deck.map(c=>c.cost);
  };

  return (
      <div className={`sidebar__body ${props.activeSidebar === 'deck' ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve">
          <ul className="graph">
            {[...new Array(7)].map((bar, i)=>
                <DeckGraph key={i} cost={i} icon={i} deck={props.deck} height={drawBars()}/>
            )}
            <DeckGraph cost={7} icon="7-plus" deck={props.deck} height={drawBars()}/>
          </ul>
          <h3>Choosen Cards <button className="btn-pearl">More details</button></h3> {/* consider changing btn to icon*/}
          <ChoosenCards deck={props.deck} countCards={props.countCards}/>
        </div>
      </div>
  );
};

export default DeckSidebar;