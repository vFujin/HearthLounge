import React from 'react';
import _ from 'lodash';
import ChoosenCards from './sidebar/details/choosen-cards';
import DeckMechanics from './sidebar/details/deck-mechanics';
import MapFunctionlessIcons from '../right-container/topbar-assets/map-functionless-icons';
import ManaCurve from "../../../../../components/mana-curve/mana-curve";

const DeckSidebar = ({filtersView, countCards, deck, deckDetails, handleDeckMechanicsToggle, mechanics, params, imgReadyDecklist}) => {
  let countByCost = _.countBy(deck, (value)=>value.cost < 7 ? value.cost : 7);
  let max = _.max(Object.values(countByCost));

  const decklistHeaderView = () => {
    return imgReadyDecklist
        ? <MapFunctionlessIcons deck={deck} activeClass="decklist-summary" filtersActive={false} set="types"/>
        : <button className="btn-pearl" onClick={handleDeckMechanicsToggle}>Deck Mechanics</button>
  };

  return (
      <div className={`sidebar__body ${filtersView === false ? 'active' : 'display-none'}`}>
        <div className="container__mana-curve" id="decklist-to-img">
          <h3>Cards/Mana Cost</h3>
          <ManaCurve deck={deck} max={max}/>

          <h3>Chosen Cards{decklistHeaderView()}</h3>
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

