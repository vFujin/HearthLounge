import React from 'react';
import ManaCurve from './sidebar/details/mana-curve/mana-curve';
import ChoosenCards from './sidebar/details/choosen-cards';
import DeckMechanics from './sidebar/details/deck-mechanics';
import _ from 'lodash';

const DeckSidebar = ({filtersView, countCards, deck, deckDetails, handleDeckDetailClick, mechanics, params}) => {
  let countByCost = _.countBy(deck, (value)=>value.cost < 7 ? value.cost : 7);
  let max = _.max(Object.values(countByCost));

  return (
      <div className={`sidebar__body ${filtersView === false ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve">
          <h3>Cards/Mana Cost</h3>
          <ManaCurve deck={deck} max={max}/>

          <h3>Chosen Cards <button className="btn-pearl" onClick={(e)=>handleDeckDetailClick(e)}>More details</button></h3> {/* consider changing btn to icon*/}
          <ChoosenCards deck={deck} countCards={countCards} deckDetails={deckDetails}/>
          <DeckMechanics deck={deck} deckDetails={deckDetails} mechanics={mechanics}/>
        </div>
        <div className="background">
          <span className={`hs-icon icon-${params.class}`}></span>
        </div>
      </div>
  );
};

DeckSidebar.propTypes = {
  filtersView: React.PropTypes.bool,
  countCards: React.PropTypes.func,
  deck: React.PropTypes.array,
  params: React.PropTypes.object
};

export default DeckSidebar;

