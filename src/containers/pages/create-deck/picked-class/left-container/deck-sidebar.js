import React from 'react';
import DeckGraph from './sidebar/deck-graph';
import ChoosenCards from './sidebar/choosen-cards';
import _ from 'lodash';
const DeckSidebar = props => {
  let countByCost = _.countBy(props.deck, (value)=>value.cost < 7 ? value.cost : 7);
  console.log(Object.values(countByCost));

  return (
      <div className={`sidebar__body ${props.activeSidebar === 'deck' ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve">
          <ul className="graph">
            {[...new Array(7)].map((bar, i)=>
                <DeckGraph key={i} cost={i} icon={i} deck={props.deck} />
            )}
            <DeckGraph cost={7} icon="7-plus" deck={props.deck}/>
          </ul>
          <h3>Choosen Cards <button className="btn-pearl">More details</button></h3> {/* consider changing btn to icon*/}
          <ChoosenCards deck={props.deck} countCards={props.countCards}/>
        </div>
      </div>
  );
};

export default DeckSidebar;