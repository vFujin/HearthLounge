import React from 'react';
import DeckGraph from './sidebar/deck-graph';
import ChoosenCards from './sidebar/choosen-cards';
import DeckDetails from './sidebar/deck-details';

import _ from 'lodash';
const DeckSidebar = ({filtersView, countCards, deck, deckDetails, handleDeckDetailClick, mechanics, params}) => {
  let countByCost = _.countBy(deck, (value)=>value.cost < 7 ? value.cost : 7);
  let max = _.max(Object.values(countByCost));

  return (
      <div className={`sidebar__body ${filtersView === false ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve">
          <h3>Cards/Mana Cost</h3>
          <ul className="graph">
            {[...new Array(7)].map((bar, i)=>
                <DeckGraph key={i} cost={i} icon={i} deck={deck} max={max} />
            )}
            <DeckGraph cost={7} icon="7-plus" deck={deck} max={max}/>
          </ul>
          <h3>Choosen Cards <button className="btn-pearl" onClick={(e)=>handleDeckDetailClick(e)}>More details</button></h3> {/* consider changing btn to icon*/}

          <ChoosenCards deck={deck} countCards={countCards} deckDetails={deckDetails}/>
          <DeckDetails deck={deck} deckDetails={deckDetails} mechanics={mechanics}/>
        </div>
        <div className="background">
          <span className={`hs-icon icon-${params}`}></span>
        </div>
      </div>
  );
};

DeckSidebar.propTypes = {
  filtersView: React.PropTypes.bool,
  countCards: React.PropTypes.func,
  deck: React.PropTypes.array,
  params: React.PropTypes.string
};

export default DeckSidebar;