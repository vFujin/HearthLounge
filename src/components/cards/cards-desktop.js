import React from 'react';
import {mapInputCards} from "./utils/map-cards";
import {mapCards} from "./utils";
import Sidebar from "./left-container/sidebar";
import Topbar from "./right-container/topbar";

const CardsDesktop = ({props, state, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick, handleFilterViewToggle}) => {
  const {cards, info} = props;
  const {filters, mode, filterView, inExtensions, inDeckCreation, cardSet, playerClass} = state;

  return (
    <div className={`container__page container__page--${filterView ? "two" : "one"}Sided cards`} id="cardsContainer">
      {
        filterView &&
        <Sidebar filters={filters}
                 info={info}
                 cards={mapInputCards(props, state)}
                 allCards={cards}
                 mode={mode}
                 inExtensions={(inExtensions && cardSet) && {cardSet}}
                 inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                 handleFilterViewToggle={handleFilterViewToggle}
                 handleFilterReset={handleFilterReset}
                 handleInputChange={handleInputChange}
                 handleSliderClick={handleSliderClick}
                 handleIconClick={handleIconClick}/>
      }
      <div className={`container__page--inner container__page--right ${filterView ? undefined : "no-filters"}`}>
        {
          filterView &&
          <Topbar filters={filters}
                  inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                  handleIconClick={handleIconClick}/>
        }
        <div className="content content__cards">
          <ul className="container__cards">
            {mapCards(props, state)}
          </ul>
        </div>
      </div>
      {!filterView && <div className="toggle-filters" onClick={handleFilterViewToggle}>Toggle Filters</div>}
    </div>
  )
};

export default CardsDesktop;