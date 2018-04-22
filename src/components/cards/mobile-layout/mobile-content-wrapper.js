import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {mapInputCards} from "../utils/map-cards";
import {mapCards} from "../utils";
import MobileSidebar from "../left-container/mobile/sidebar";

class MobileContentWrapper extends Component {


  render() {
    const {cardsProps, cardsState, mobileActiveTab, handleFilterReset, handleInputChange, handleSliderClick, handleIconClick} = this.props;
    const {filters, mode, inExtensions, inDeckCreation, cardSet, playerClass} = cardsState;
    const {info, cards} = cardsProps;

    return (
      <div className="container__page--mobileContentWrapper"
           style={{background: mobileActiveTab === "mobileTabFilters" && "#A69E9D"}}>
        {
          mobileActiveTab === "mobileTabCards"
            ? (
              <div className="content content__cards">
                <ul className="container__cards">
                  {mapCards(cardsProps, cardsState)}
                </ul>
              </div>
            )
            : (
              <div className="container__mobileFilters">
                <MobileSidebar filters={filters}
                               info={info}
                               cards={mapInputCards(cardsProps, cardsState)}
                               allCards={cards}
                               mode={mode}
                               inExtensions={(inExtensions && cardSet) && {cardSet}}
                               inDeckCreation={(inDeckCreation && playerClass) && {playerClass}}
                               handleFilterReset={handleFilterReset}
                               handleInputChange={handleInputChange}
                               handleSliderClick={handleSliderClick}
                               handleIconClick={handleIconClick}/>
              </div>
            )
        }
      </div>
    )
  }
}

MobileContentWrapper.propTypes = {
  cardsProps: PropTypes.shape({
    info: PropTypes.object,
    cards: PropTypes.object
  }),
  cardsState: PropTypes.shape({
    filters: PropTypes.object.isRequired,
    inExtensions: PropTypes.bool,
    inDeckCreation: PropTypes.bool,
    mode: PropTypes.string,
    playerClass: PropTypes.string,
    cardSet: PropTypes.string
  }),
  mobileActiveTab: PropTypes.string.isRequired,
  handleLazyloadUpdate: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSliderClick: PropTypes.func.isRequired,
  handleIconClick: PropTypes.func.isRequired
};

MobileContentWrapper.defaultProps = {
  cardsProps: {
    info: {},
    cards: []
  },
  filters: {},
  inExtensions: undefined,
  inDeckCreation: undefined,
  mobileActiveTab: "mobileTabCards",
  mode: 'wild',
  playerClass: undefined,
  cardSet: undefined,
};

export default MobileContentWrapper;