import React, { Component } from 'react';
import { mapInputCards } from './utils/map-cards';
import { lazyloadCards, mapCards } from './utils';
import Sidebar from './left-container/sidebar';
import Topbar from './right-container/topbar';

class CardsDesktop extends Component {
  componentDidMount() {
    const { cardsState, handleLazyloadUpdate } = this.props;
    const { infiniteScrollContainer, loadedCards } = cardsState;
    lazyloadCards(
      infiniteScrollContainer,
      loadedCards => handleLazyloadUpdate(loadedCards),
      loadedCards
    );
  }

  render() {
    const {
      cardsProps,
      cardsState,
      handleFilterReset,
      handleInputChange,
      handleSliderClick,
      handleIconClick,
      handleFilterViewToggle,
    } = this.props;
    const { cards, info } = cardsProps;
    const {
      filters,
      mode,
      inExtensions,
      inDeckCreation,
      cardSet,
      playerClass,
    } = cardsState;
    const filterView =
      inDeckCreation || inExtensions
        ? !cardsState.filterView
        : cardsState.filterView;

    return (
      <div
        className={`container__page container__page--${
          filterView ? 'two' : 'one'
        }Sided cards`}
        id="cardsContainer"
      >
        {filterView && (
          <Sidebar
            filters={filters}
            info={info}
            cards={mapInputCards(cardsProps, cardsState)}
            allCards={cards}
            mode={mode}
            inExtensions={inExtensions && cardSet && { cardSet }}
            inDeckCreation={inDeckCreation && playerClass && { playerClass }}
            handleFilterViewToggle={handleFilterViewToggle}
            handleFilterReset={handleFilterReset}
            handleInputChange={handleInputChange}
            handleSliderClick={handleSliderClick}
            handleIconClick={handleIconClick}
          />
        )}
        <div
          className={`container__page--inner container__page--right ${
            filterView ? undefined : 'no-filters'
          }`}
        >
          {filterView && (
            <Topbar
              filters={filters}
              inDeckCreation={inDeckCreation && playerClass && { playerClass }}
              handleIconClick={handleIconClick}
            />
          )}
          <div className="content content__cards">
            <ul className="container__cards">
              {mapCards(cardsProps, cardsState)}
            </ul>
          </div>
        </div>
        {!filterView && (
          <div className="toggle-filters" onClick={handleFilterViewToggle}>
            Toggle Filters
          </div>
        )}
      </div>
    );
  }
}

export default CardsDesktop;
