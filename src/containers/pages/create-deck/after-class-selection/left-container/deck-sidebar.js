import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ChoosenCards from './sidebar/details/choosen-cards';
import DeckMechanics from './sidebar/details/deck-mechanics';
import MapFunctionlessIcons from '../right-container/topbar-assets/map-functionless-icons';
import ManaCurve from "../../../../../components/mana-curve/mana-curve";
import Icon from "../../../../../components/icons/icon";

const DeckSidebar = ({countCards, deck, deckDetails, handleDeckMechanicsToggle, mechanics, playerClass, imgReadyDecklist}) => {
  let countByCost = _.countBy(deck, (value)=>value.cost < 7 ? value.cost : 7);
  let max = _.max(Object.values(countByCost));

  const decklistHeaderView = () => {
    return imgReadyDecklist
        ? <MapFunctionlessIcons deck={deck} activeClass="decklist-summary" filtersActive={false} set="types"/>
        : <button className="btn-pearl" onClick={handleDeckMechanicsToggle}>Deck Mechanics</button>
  };

  return (
      <div className="sidebar__body">
        <div className="container__mana-curve" id="decklist-to-img">
          <h3>Cards/Mana Cost</h3>
          <ManaCurve deck={deck} max={max}/>

          <h3>Chosen Cards{decklistHeaderView()}</h3>
          {!deckDetails
              ? <ChoosenCards deck={deck} countCards={countCards}/>
              : <DeckMechanics deck={deck} mechanics={mechanics}/>
          }
        </div>
        <div className="background">
          <Icon name={playerClass}/>
        </div>
      </div>
  );
};

DeckSidebar.propTypes = {
  filtersView: PropTypes.bool,
  countCards: PropTypes.func,
  deck: PropTypes.array,
  params: PropTypes.object
};

export default DeckSidebar;

